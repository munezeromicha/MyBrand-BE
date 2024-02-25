import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
 const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, '/uploads/')
    },
    // function(req,file,cb){
    //     cb(null, new Date().toISOString() + '-' + file.originalname)
    // }
 })

 const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }else{
        cb({message: 'Unsupported file format'} as unknown as null, false)
    }
 }

 const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024},
    fileFilter: fileFilter
 })

 export default upload;