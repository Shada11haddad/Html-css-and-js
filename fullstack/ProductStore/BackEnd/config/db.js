import mongoose from "mongoose";

// Use environment variable if set; otherwise, fallback to the provided connection string.
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://shadahadad123:tDWiEKOI68wWdV7A@cluster0.tg7cx.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Async function to connect to MongoDB.
export const connectDB = async () => {
    try {
        // With Mongoose 6+, the connection automatically uses the new URL parser and unified topology.
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
