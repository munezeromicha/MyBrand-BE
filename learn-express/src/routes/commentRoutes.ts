// src/routes/commentRoutes.ts

import express from 'express';
import { addComment, getAllComments } from '../controllers/commentsController';

const router = express.Router();

// Routes for comments
router.post('/blogs/:id/comments', addComment);
router.get('/blogs/:id/comments', getAllComments);

export default router;
