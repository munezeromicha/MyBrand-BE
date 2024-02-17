import multer from "multer";
 const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, '/uploads/')
    },
    function(req,file,cb){
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
 })

 const fileFilter = (req,file,cb) => {
    if(mimetype === 'image/jpeg' || mimetype === 'image/png') {
        cb(null, true)
    }else{
        cb({message: 'Unsupported file format'}, false)
    }
 }

 const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024},
    fileFilter: fileFilter
 })

 module.exports = upload;