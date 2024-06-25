import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

app.get("/healthy", (req: Request, res: Response) => {
  try {
    res.send({
      status: true,
      message: "backend is healthy",
    });
  } catch (error: any) {
    res.send({
      status: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
