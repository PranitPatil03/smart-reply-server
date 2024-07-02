import { cache } from "..";
import { TokenType } from "../util/types";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { mapToEmailData, UserEmail } from "../util/util";

import {
  encryptEmailDetails,
  fetchUserEmails,
  saveUserEmails,
} from "../services/mails";

const prisma = new PrismaClient();

export const fetchUserEmailsHandler = async (req: Request, res: Response) => {
  const userId = "unique_user_identifier";
  const tokens = cache.get<TokenType>(userId);

  if (!tokens || !tokens.access_token) {
    return res.status(401).json({ error: "No valid tokens found" });
  }

  try {
    const emails = await fetchUserEmails(tokens.access_token);

    const userEmail = UserEmail(tokens.id_token);

    if (!userEmail) {
      return;
    }

    const emailDataArray = emails.map(mapToEmailData);
    const encryptedEmails = emailDataArray.map(encryptEmailDetails);
    await saveUserEmails(userEmail, encryptedEmails);
    res
      .status(200)
      .json({ emails: emails, status: "Fetch mails and save successfully" });
  } catch (error) {
    console.error("Error fetching user emails:", error);
    res.status(500).json({ error: "Failed to fetch user emails" });
  }
};

//Todo: first fetches user recent mails then gives context of each mail and store it in db
export const mailContext = async (req: Request, res: Response) => {
  const { emailId } = req.body;
  console.log(emailId);
  console.log("body", req.body);

  if (!emailId) {
    return res.status(400).json({ status: "emailId is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: emailId,
      },
      include: {
        Email: true,
      },
    });

    if (user) {
      console.log("User", user);
      return res.status(200).json({ status: "user found in db", user });
    } else {
      return res.status(404).json({ status: "user not found" });
    }
  } catch (error: any) {
    console.error("Error finding user:", error);
    return res
      .status(500)
      .json({ status: "error finding user", error: error.message });
  }
};
