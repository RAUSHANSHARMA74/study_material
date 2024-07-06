import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGODB;

const connection = mongoose.connect(MONGO_URL);

export default connection;
