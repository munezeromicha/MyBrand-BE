import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

////////////////////////////////Database configuration////////////////////////////////
const mongoUrl: string = process.env.MONGODB_URL!;
const DB = async (): Promise<void> => {
    try {
      await mongoose.connect(mongoUrl);
      console.log(`Wow connected`);
    } catch (error) {
      console.error(error);
    }
  };

  export default DB;