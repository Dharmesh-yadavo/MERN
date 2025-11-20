import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected successfully to mongodb");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
