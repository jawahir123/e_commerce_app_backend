import mongoose from "mongoose";
import { dbURL } from "./config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURL); // Removed deprecated options
    console.log(`Connected to the database: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1); // Exit if database connection fails
  }
};

export default connectDB;
