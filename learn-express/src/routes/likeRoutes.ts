// src/routes/likeRoutes.ts

import express from 'express';
import { addLike, getAllLikes } from '../controllers/likeController';

const router = express.Router();

// Routes for likes
router.post('/blogs/:id/likes', addLike);
router.get('/blogs/:id/likes', getAllLikes);

export default router;
