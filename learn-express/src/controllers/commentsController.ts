// src/controllers/commentController.ts

import { Request, Response } from 'express';
import Joi from 'joi';
import Comment from '../models/Comment';

// Joi schema for comment validation
const commentSchema = Joi.object({
    text: Joi.string().required()
});

export const addComment = async (req: Request, res: Response) => {
    try {
        // Validate request body
        const { error } = commentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { text } = req.body;

        // Create a new comment
        const comment = new Comment({
            text
        });

        // Save the comment to the database
        const savedComment = await comment.save();

        res.status(201).json(savedComment);
    } catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error);
    }
};

export const getAllComments = async (req: Request, res: Response) => {
    try {
        // Fetch all comments
        const comments = await Comment.find();

        res.json(comments);
    } catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error);
    }
};
