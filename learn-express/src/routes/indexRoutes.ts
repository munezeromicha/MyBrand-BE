import express, { Request, Response } from 'express';
// import Joi from 'joi';
// import Blog, { IBlog } from '../models/Blog';
import {createPost,readAll,readById,deleteItem} from '../controllers/Controller'

const router = express.Router();

// Create a blog
router.post('/blogs', createPost);

// Read all blogs
router.get('/blogs', readAll);

// Read a blog by ID
router.get('/blogs/:id', readById);

// Add a comment to a blog
// router.post('/blogs/:id/comments', addComments);

// read comment by ID
router.get('/blogs/:id/comments' );


// Like a blog
// router.post('/blogs/:id/like', addLike);

//delete a blog
router.delete("/blogs/:id", deleteItem);

export default router;
