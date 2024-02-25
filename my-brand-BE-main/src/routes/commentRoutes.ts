import { Router } from "express";

import { getComment,commentOn,deleteComment,readAllComments,updateComment} from "../controllers/commentController";


const router = Router()

router.post('/blogs/:id/comments',commentOn)
router.get('/blogs/:id/comments',getComment)
router.patch('/blogs/:id/comments',updateComment)
router.get('/blogs/comments',readAllComments)
router.delete('/blogs/:id/comments',deleteComment)

export default router