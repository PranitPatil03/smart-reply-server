import CryptoJS from "crypto-js";
import { EmailData, EmailDetails } from "../util/types";

export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

export function encrypt(value: string): string {
  if (!ENCRYPTION_KEY) {
    throw new Error("ENCRYPTION_KEY is not set");
  }
  const ciphertext = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
  return ciphertext;
}

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
