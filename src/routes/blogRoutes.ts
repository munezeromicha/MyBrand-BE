import { Router } from "express"
import { createPost, getAllPost, getPost, updatePost, deletePost} from "../controllers/blogController"
import upload from "../helper/multer"
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import {createNewLike} from "../controllers/blogController";

const router = Router()

router.post('/blogs',checkAuthenticated,checkAdmin,upload.single('image'),createPost)
router.get('/blogs/:id',getPost)
router.get('/blogs',getAllPost)
router.patch('/blogs/:id', updatePost)
router.delete('/blogs/:id',deletePost)
router.post("/blogs/:id/likes",checkAuthenticated,createNewLike)



export default router