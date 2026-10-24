import mongoose from "mongoose";

async function connectDB():Promise<void> {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    
    if (!MONGO_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }
    const connection = await mongoose.connect(MONGO_URI);
   console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
  }
}

export default connectDB;