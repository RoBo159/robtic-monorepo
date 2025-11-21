import mongoose from "mongoose";
import { Logger } from "@robo/logger";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ticketbot");
        Logger.debug("✅ MongoDB connected");
    } catch (err) {
        Logger.error(`❌ MongoDB connection failed: ${err}`);
        process.exit(1);
    }
}