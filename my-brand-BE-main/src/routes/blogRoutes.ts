import { Router } from "express"
import { createPost, getAllPost, getPost, updatePost, deletePost, Likes} from "../controllers/blogController"
import upload from "../helper/multer"
import adminAuthorize from "../middleware/adminAuthorize"
import auth from "../middleware/auth"

const router = Router()
router.post('/blogs',auth,adminAuthorize, upload.single('image'),createPost)
router.get('/blogs/:id',getPost)
router.get('/blogs',getAllPost)
router.patch('/blogs/:id', auth, adminAuthorize,updatePost)
router.delete('/blogs/:id',auth,deletePost)
router.post("/blogs/:id/likes",Likes)



export default router