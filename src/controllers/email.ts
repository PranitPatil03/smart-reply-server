import { cache } from "..";
import { TokenType } from "../util/types";
import { Request, Response } from "express";

import { mapToEmailData, UserEmail } from "../util/util";

import {
  encryptEmailDetails,
  fetchUserEmails,
  saveUserEmails,
} from "../services/mails";

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
  const emailId = req.body;

  try {
  } catch (error) {}
};
