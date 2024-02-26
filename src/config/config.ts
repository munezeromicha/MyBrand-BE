import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET

export default {SECRET};