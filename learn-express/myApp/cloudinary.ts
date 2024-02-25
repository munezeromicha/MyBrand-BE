import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
   cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploads = (file: any, folder: any) => {
    return new Promise(resolve => {
        cloudinary.v2.uploader.upload(file,  {
            resource_type: "auto",
            folder: folder
        }, (result: any) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        });
    })
}

export default cloudinary;
