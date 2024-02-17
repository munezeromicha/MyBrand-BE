import { Request, Response } from 'express';
import PostModel from '../models/Blog';
import { Post }  from '../models/Blog';


const getPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts: Post[] = await PostModel.find();
        res.send(posts);
    } catch (error) {
        console.log(error);
    }
};

const addNewPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post: Post | null = new PostModel({
            title: req.body.title,
            content: req.body.content,
        });
        await post.save();
        res.send(post);
    } catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
};

const individualPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post: Post | null = await PostModel.findById(req.params.id);

        if (!post) {
            res.status(404).send({ error: "Post doesn't exist!" });
            return;
        }

        if (req.body.title) {
            post.title = req.body.title;
        }

        if (req.body.content) {
            post.content = req.body.content;
        }

        await post.save();
        res.send(post);
    } catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
};

const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        await PostModel.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
};

export {
    addNewPost,
    individualPost,
    deleteItem,
    getPost,
};
