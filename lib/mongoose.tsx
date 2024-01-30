import mongoose from "mongoose";
import { MongoClient } from 'mongodb';

let isConnected = false; // track the connection

/**
 * Connects to the MongoDB database using the provided URI.
 *
 * @return {Promise<MongoClient | void>} The MongoClient instance upon successful connection.
 */
export const connectToDB = async (): Promise<MongoClient | void> => {

  // Check if the MongoDB URI is provided
  if (!process.env.MONGODB_URI) {
    throw new Error("No MongoDB URI");
  }
  // Check if the database is already connected
  if (isConnected) return console.log("MongoDB is already connected");

  try {
    // Connect to the MongoDB database using the provided URI
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    // Log any connection error
    console.log(error);
  }
};
