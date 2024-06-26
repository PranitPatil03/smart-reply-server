import express from "express";
import {
  authenticateGmailWithOAuth,
  handleGoogleCallback,
} from "../controllers/auth";

export const authRouter = express.Router();

authRouter
  .get("/google", authenticateGmailWithOAuth)
  .get("/google/callback", handleGoogleCallback);
