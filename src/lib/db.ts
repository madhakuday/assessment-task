import mongoose from "mongoose";

const MONGODB_URLb = process.env.MONGODB_URL || "";

if (!MONGODB_URLb) {
  throw new Error("MongoURL not found.");
}

async function connectDB() {
  const opts = {
    bufferCommands: false,
  };

  const connection = mongoose.connect(MONGODB_URLb, opts).then((mongoose) => {
    return mongoose;
  });

  return await connection;
}

export default connectDB;
