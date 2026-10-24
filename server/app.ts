import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-Type',
      'Athorization',
      'Cache-Contro',
      'Expires',
      'Pragma'
    ],
    credentials:true
  }),
);

app.use(cookieParser())
app.use(express.json());

async function startServer():Promise<void> {
  
  await connectDB()
  
  app.listen(PORT, () => {
    console.log(`app is listning on port ${PORT}`);
  });
}

startServer()



