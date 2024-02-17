import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const databaseConnection = async () => {

  try {
      const password = process.env.MONGODB_PASSWORD || '';
      const uri = process.env.MONGODB_URI || '';
      const dbUrl = uri.replace('<password>', password);
    (await mongoose.connect(dbUrl)).Connection;
    console.log('Database connected');
  } catch (err) {
    console.log(err);
  }
};

export default databaseConnection;
