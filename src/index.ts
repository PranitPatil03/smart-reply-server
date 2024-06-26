import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { authRouter } from "./routes/auth";
import { emailRouter } from "./routes/email";
import NodeCache from "node-cache";

export const cache = new NodeCache();

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/email", emailRouter);

app.get("/", (req: Request, res: Response) => {
  try {
    res.send({
      message: "Server is now running. View API documentation at /docs.",
    });
  } catch (error: any) {
    res.send({
      message: error.message,
    });
  }
});

app.get("/healthy", (req: Request, res: Response) => {
  try {
    res.send({
      status: true,
      message: "Backend is healthy",
    });
  } catch (error: any) {
    res.send({
      status: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
