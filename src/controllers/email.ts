import { Request, Response } from "express";
import { fetchUserEmails } from "../services/fetchEmails";
import { cache } from "..";
import { TokenType } from "../util/types";

export const fetchUserEmailsHandler = async (req: Request, res: Response) => {
  const userId = "unique_user_identifier";
  const tokens = cache.get<TokenType>(userId);
  console.log("Email Token", tokens);
  console.log("Email Cache", cache.data);

  if (!tokens || !tokens.access_token) {
    return res.status(401).json({ error: "No valid tokens found" });
  }

  try {
    const emails = await fetchUserEmails(tokens.access_token);
    console.log("Emails", emails);
    res.json(emails);
  } catch (error) {
    console.error("Error fetching user emails:", error);
    res.status(500).json({ error: "Failed to fetch user emails" });
  }
};
