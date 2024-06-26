import express from "express";
import { fetchUserEmailsHandler } from "../controllers/email";

export const emailRouter = express.Router();

emailRouter.get("/fetch-mails", fetchUserEmailsHandler);
