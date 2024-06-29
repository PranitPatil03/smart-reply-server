import { google } from "googleapis";
import dotenv from "dotenv";
import { GoogleTokens } from "../util/types";

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  throw new Error(
    "Missing environment variables. Check CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI."
  );
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

export const getGoogleAuthUrl = () => {
  const scopes = [
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ];
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
};

export const getGoogleAccessToken = async (
  code: string
): Promise<GoogleTokens> => {
  const { tokens } = await oauth2Client.getToken(code);
  return {
    access_token: tokens.access_token!,
    refresh_token: tokens.refresh_token!,
    scope: tokens.scope!,
    token_type: tokens.token_type!,
    id_token: tokens.id_token!,
    expiry_date: tokens.expiry_date!,
  };
};

export const getOAuth2Client = () => oauth2Client;
