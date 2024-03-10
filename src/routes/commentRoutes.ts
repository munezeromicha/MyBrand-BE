import { Router } from "express";
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import { getComment,commentOn,deleteComment,getAllComments,updateComment} from "../controllers/commentController";


const router = Router()

router.post('/blogs/:id/comments',commentOn)
router.get('/blogs/:id/comments',getComment)
router.patch('/blogs/:id/comments',checkAdmin, checkAuthenticated,updateComment)
router.get('/blogs/comments',getAllComments)
router.delete('/comments/:id',deleteComment)

export default router