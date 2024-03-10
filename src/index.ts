import express from 'express';
import { Request, Response } from 'express';
import blogRoutes from './routes/blogRoutes'
import commentRoutes from './routes/commentRoutes'
import endUser from './routes/user'
import queriesRouter from './routes/queriesRouter'
import swaggerUI from 'swagger-ui-express';
// import swaggerSpec from './swagger';
import passport from './helper/delay';
import * as Doc from "./mySwagger.json";
import cors from 'cors'
import bodyParser from 'body-parser';
import  recoverEmail  from './routes/recoverEmail';

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use("/api", blogRoutes, commentRoutes,endUser,queriesRouter,recoverEmail);
app.use('/swagger-doc', swaggerUI.serve,swaggerUI.setup(Doc));


export default app;