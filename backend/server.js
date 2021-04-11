import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDb from "../backend/config/db.js";
import {
  notFound,
  errorHandler,
} from "../backend/middleware/errorMiddleware.js";

dotenv.config;

// connectDb();

const app = express();

app.use(helmet());
app.use(express.json());

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
