import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import { router as authRouter } from "./routes/authRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(PORT || 3000, () =>
    console.log(`server is listening on port ${PORT || "3000"}`),
);
