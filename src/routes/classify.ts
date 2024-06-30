import express from "express";
import { mailContext } from "../controllers/email";

export const classifyRouter = express.Router();

classifyRouter.post("/mail-context", mailContext);
