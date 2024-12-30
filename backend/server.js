import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cloudinary from "cloudinary";
import morgan from "morgan";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 6000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(morgan("dev"));
app.use(express.json()); // for parsing application/json to pass json data in the body
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded   to pass form data in the body

app.use(cookieParser()); // for parsing cookies

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
