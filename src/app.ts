import express from 'express';
import DB from './config/configure';
import dotenv from 'dotenv';
import blogRoutes from './routes/blogRoutes'
import commentRoutes from './routes/commentRoutes'
import endUser from './routes/user'
import queriesRouter from './routes/queriesRouter'
import swaggerUI from 'swagger-ui-express';
import swaggerJSDOC from 'swagger-jsdoc';


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/api", blogRoutes, commentRoutes,endUser,queriesRouter);
DB()

app.use(express.json());

const options = {
  definition: {
      openapi: "3.0.0",
      info: {
          title: "Blog API doc",
          version: "1.0.0",
          description: 
              "This is a blog API made with express and mongodb.",
      },
     
      servers: [
          {
              url: `http://localhost:${port}`,
          }
      ]
  },
  apis: ["./routes/*.ts"],
};
const specs = swaggerJSDOC(options);


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;