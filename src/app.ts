import app from  './index';
import DB from './config/configure';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT || 3000;

DB()



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
