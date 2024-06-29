import CryptoJS from "crypto-js";
import { google } from "googleapis";
import { PrismaClient } from "@prisma/client";
import { EmailData, EmailDetails } from "../util/types";
import { encrypt } from "../util/util";

const oauth2Client = new google.auth.OAuth2();
const prisma = new PrismaClient();

export const fetchUserEmails = async (accessToken: string) => {
  oauth2Client.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({
    version: "v1",
    auth: oauth2Client,
  });

  try {
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 10,
    });

    const messages = response.data.messages || [];

    const fullMessages = await Promise.all(
      messages.map(async (message) => {
        const fullMessage = await gmail.users.messages.get({
          userId: "me",
          id: message.id || "",
        });
        return fullMessage.data;
      })
    );

    return fullMessages;
  } catch (error) {
    console.error("Error fetching user emails:", error);
    throw error;
  }
};

export function encryptEmailDetails(emailData: EmailData): EmailDetails {
  const snippet = encrypt(emailData.snippet);
  const headers = emailData.payload.headers.reduce((acc, header) => {
    acc[header.name.toLowerCase()] = encrypt(header.value);
    return acc;
  }, {} as { [key: string]: string });

  const emailDetails: EmailDetails = {
    subject: headers["subject"] || "",
    from: headers["from"] || "",
    to: headers["to"] || "",
    date: headers["date"] || "",
    snippet: snippet,
  };

  if (emailData.payload.parts) {
    for (const part of emailData.payload.parts) {
      const decodedBody = Buffer.from(part.body.data, "base64").toString(
        "utf-8"
      );
      if (part.mimeType === "text/plain") {
        emailDetails.body = encrypt(decodedBody);
      } else if (part.mimeType === "text/html") {
        emailDetails.bodyHtml = encrypt(decodedBody);
      }
    }
  }

  return emailDetails;
}

export const saveUserEmails = async (
  userId: string,
  emails: EmailDetails[]
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          id: userId,
          email: userId,
        },
      });

      for (const email of emails) {
        const createdEmail = await prisma.email.create({
          data: {
            subject: email.subject,
            sender: email.from,
            recipients: [email.to],
            body: email.body || "",
            bodyHtml: email.bodyHtml || "",
            userId: userId,
          },
        });

        await prisma.emailRef.create({
          data: {
            userId: userId,
            mailId: createdEmail.id,
          },
        });
      }
      console.log(`Created new user with ID ${userId}`);
      console.log("Emails saved successfully.");
    } else {
      console.log(
        `User with ID ${userId} already exists. Skipping user creation.`
      );
    }
  } catch (error) {
    console.error("Error saving emails:", error);
    throw new Error("Failed to save emails to the database.");
  }
};
