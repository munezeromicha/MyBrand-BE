import { Router } from "express"
import { createPost, getAllPost, getPost, updatePost, deletePost, Likes} from "../controllers/blogController"
import upload from "../helper/multer"
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";


const router = Router()

router.post('/blogs',checkAuthenticated,checkAdmin,upload.single('image'),createPost)

/**
 * @swagger
 * components:
 *    schemas:
 *       blog:
 *         type:
 *         required: 
 *           - title:
 *           - content:
 *           - image:
 *         properties:
 *           id:
 *             type: string
 *             description: the auto generated if of the blog
 *           title:
 *              type: string
 *              description: the title of the blog will be specified by admin   
 *           image:
 *              type: string
 *              description: the image will be inserted by the admin
 *        example:
 *           id: E4EE3344
 *           title: Blog
 *           content: lorem ipsum
 *           image: the url image
 */

router.get('/blogs/:id',getPost)
router.get('/blogs',getAllPost)
router.patch('/blogs/:id', checkAuthenticated,checkAdmin,updatePost)
router.delete('/blogs/:id',checkAuthenticated,checkAdmin,deletePost)
router.post("/blogs/:id/likes",Likes)



export default router