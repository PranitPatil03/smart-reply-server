import { Request, Response } from "express";
import {
  getGoogleAccessToken,
  getGoogleAuthUrl,
} from "../services/OAuth2Client";
import { cache } from "..";
import { TokenType } from "../util/types";

export const authenticateGmailWithOAuth = (req: Request, res: Response) => {
  const authUrl = getGoogleAuthUrl();
  res.redirect(authUrl);
};

export const handleGoogleCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  console.log("Auth Cache", cache.data);
  console.log("Auth Code", code);

  if (!code) {
    return res.status(400).json({ error: "Authorization code is required" });
  }

  try {
    const tokens: TokenType = await getGoogleAccessToken(code);
    console.log("auth token - ", tokens);

    const userId = "unique_user_identifier";
    cache.set(userId, tokens, tokens.expires_in || 3600);

    res.json({ success: true, tokens });
  } catch (error) {
    console.error("Error exchanging Google auth code for tokens:", error);
    res.status(500).json({ error: "Failed to exchange auth code for tokens" });
  }
};
