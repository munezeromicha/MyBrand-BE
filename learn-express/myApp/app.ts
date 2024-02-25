import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import upload from './multer';
import cloudinary, { uploads } from './cloudinary';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/upload-images', upload.array('image'), async (req: Request, res: Response) => {
  const uploader = async (filePath: string) => await uploads(filePath, 'Images');

  if (req.method === 'POST') {
    const urls: string[] = [];
    const files = req.files as Express.Multer.File[];
    for (const file of files) {
      const { path: filePath } = file;
      const newPath = await uploader(filePath);
      urls.push(newPath as string);
      fs.unlinkSync(filePath);
    }

    res.status(200).json({
      message: 'images uploaded successfully',
      data: urls
    });
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
