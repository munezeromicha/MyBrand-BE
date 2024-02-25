import {Request, Response} from 'express';
import dotenv from 'dotenv';
import express  from "express";
import  router  from './routes/auth';
 const app = express();

 const port = process.env.PORT || 9000;
 app.use(express.json());

 app.get('/', (req:Request, res:Response) => {
    console.log('Now server has started!');
 })
 app.use('/api', router)

 app.listen(port, () => {
   console.log(`Now server has started at http://localhost${port}`)
 })