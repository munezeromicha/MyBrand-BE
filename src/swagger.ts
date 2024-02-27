import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Node js api Project Documentation',
        version: ' 1.0.0',
        description: 'Node js api Project Documentation',
    },
    servers: [
        {
            url: `http://localhost:${PORT}`
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;