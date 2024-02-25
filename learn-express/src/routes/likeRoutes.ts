import express from 'express';
import { likeBlog, getLikes } from '../controllers/likeController';

const router = express.Router();

// Routes for comments
router.post('/blogs/:id/likes', likeBlog);
router.get('/blogs/:id/likes', getLikes);
// router.get('/blogs/:id/comments/:id', getComment);
// router.patch('/blogs/:id/comments/:id', updateComment);
// router.delete('/blogs/:id/comments/:id', deleteComment);

export default router;
