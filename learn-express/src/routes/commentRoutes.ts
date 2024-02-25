// src/routes/commentRoutes.ts

import express from 'express';
import { addComment, getComment,updateComment, deleteComment } from '../controllers/commentsController';

const router = express.Router();

// Routes for comments
router.post('/blogs/:id/comments', addComment);
router.get('/blogs/:id/comments/:id', getComment);
router.patch('/blogs/:id/comments/:id', updateComment);
router.delete('/blogs/:id/comments/:id', deleteComment);

export default router;
