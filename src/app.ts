import express from 'express';
import DB from './config/configure';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes'
import commentRoutes from './routes/commentRoutes'
import endUser from './routes/user'
import queriesRouter from './routes/queriesRouter'
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger';
dotenv.config();

const app = express();
const port = process.env.PORT;

DB()

app.use(express.json());
app.use("/api", blogRoutes, commentRoutes,endUser,queriesRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;