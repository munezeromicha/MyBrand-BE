import { MongoDb } from 'mongodb';

const mongoUri = 'mongodb://localhost:27017/JWT'; // Replace with your credentials
const client = new MongoDb(mongoUri);

// Optionally, connect and export the client:
const myFunction = async(  ): Promise<void> => {
   await client.connect();  
}
// Handle errors appropriately
export const dbClient = client;

export default {
  secret: 'Munezero2024!',
  mongoUri,
  // ...other configurations
};