// src/controllers/likeController.ts

import { Request, Response } from 'express';
import Joi from 'joi';
import Like from '../models/Like';

// Joi schema for like validation
const likeSchema = Joi.object({
    userID: Joi.string().required()
});

export const addLike = async (req: Request, res: Response) => {
    try {
        // Validate request body
        const { error } = likeSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { userID } = req.body;

        // Create a new like
        const like = new Like({
            userID
        });

        // Save the like to the database
        const savedLike = await like.save();

        res.status(201).json(savedLike);
    } catch (error) {
        console.log(error);
        // res.status(500).json({ error: err.message });
    }
};

export const getAllLikes = async (req: Request, res: Response) => {
    try {
        // Fetch all likes
        const likes = await Like.find();

        res.json(likes);
    } catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error);
    }
};
