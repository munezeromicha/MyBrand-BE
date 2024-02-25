
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

export const getComment = async (req: Request, res: Response) => {
    try {
        const blog = await Comment.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ error: 'Comment not found.' });
        }
        res.json(blog);
    }catch (error) {
        res.status(500).json({ error: 'error occurred.' });
    }
}

export const updateComment = async (req: Request, res: Response) => {
    try {
        const {text} = req.body;
        // const { error } = postval.validate({ text });
        // if (error) {
        //   return res.status(400).json({ error: error.details[0].message });
        // }
        const blog = await Comment.findByIdAndUpdate(req.params.id, { text }, { new: true });
        res.json(blog);
        // await blog?.save();
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
    try {
        await Comment.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
};