import { Router } from "express"
import { createPost, getAllPost, getPost, updatePost, deletePost, Likes} from "../controllers/blogController"
import upload from "../helper/multer"
import { isAdmin, isAuthenticated } from "../middleware/adminAuthorize";
import auth from "../middleware/auth"

const router = Router()
router.post('/blogs',isAuthenticated,isAdmin,upload.single('image'),createPost)
router.get('/blogs/:id',getPost)
router.get('/blogs',getAllPost)
router.patch('/blogs/:id', isAuthenticated,isAdmin,updatePost)
router.delete('/blogs/:id',isAuthenticated,isAdmin,deletePost)
router.post("/blogs/:id/likes",Likes)



export default router