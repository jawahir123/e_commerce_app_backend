import mongoose from "mongoose";
import { dbURL } from "./config.js";
const connectDB = async()=>{
  try {
    //success
    await mongoose.connect(dbURL);
    console.log(`connected to the database${dbURL}`)
  } catch (error) {
    //error
    console.log(`error connecting to the database${error}`);
    process.exit(1);
  }
}
export default connectDB;