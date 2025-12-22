import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post .route.js";
import commentRoute from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
