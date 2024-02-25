import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from './src/Routers/userRouter.js';
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
app.get('/',(req,res)=>{
    console.log('server is starting ');
})
app.use(express.json());
app.use('/api/users',userRouter);

const port= process.env.PORT || 9000;
app.listen(port,()=>{console.log(`server start at http://localhost:${port}`)})