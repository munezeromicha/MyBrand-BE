import express from 'express';
import DB from './config/configure';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes'
import commentRoutes from './routes/commentRoutes'
import endUser from './routes/user'
import queriesRouter from './routes/queriesRouter'
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger';
import passport from './helper/delay';


const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use("/api", blogRoutes, commentRoutes,endUser,queriesRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default app;