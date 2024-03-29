import { Router } from "express"
import { createPost, getAllPost, getPost, updatePost, deletePost} from "../controllers/blogController"
import upload from "../helper/multer"
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import {Likes} from "../controllers/blogController";

const router = Router()

router.post('/blogs',checkAuthenticated,checkAdmin,upload.single('image'),createPost)
router.get('/blogs/:id',getPost)
router.get('/blogs',getAllPost)
router.patch('/blogs/:id',checkAuthenticated,checkAdmin,updatePost)
router.delete('/blogs/:id',checkAuthenticated,checkAdmin,deletePost)
// router.post("/blogs/:id/likes",createNewLike)
router.post("/blogs/:id/likes",Likes);



export default router