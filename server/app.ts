import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

async function startServer():Promise<void> {
  
  await connectDB()
  
  app.listen(PORT, () => {
    console.log(`app is listning on port ${PORT}`);
  });
}

startServer()

