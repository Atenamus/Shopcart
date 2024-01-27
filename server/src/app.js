import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS with specified origin and credentials
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Parse JSON data
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies
app.use(cookieParser());

import userRoutes from "./routes/user.routes.js";
app.use("/api/user", userRoutes);

export default app;
