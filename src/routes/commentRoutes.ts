import { Router } from "express";
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import { getComment,commentOn,deleteComment,readAllComments,updateComment} from "../controllers/commentController";


const router = Router()

router.post('/blogs/:id/comments',commentOn)
router.get('/blogs/:id/comments',getComment)
router.patch('/blogs/:id/comments',checkAdmin, checkAuthenticated,updateComment)
router.get('/blogs/comments',readAllComments)
router.delete('/comments/:id',deleteComment)

export default router