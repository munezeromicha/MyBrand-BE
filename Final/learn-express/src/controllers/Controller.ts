import{ Request, Response }from 'express';
import Post from '../models/postModel';
import { myPost } from '../models/postModel';

const getPost = async(req:Request, res:Response): Promise<void> => {
    try {
        const posts: myPost[] = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

const addNewPost = async(req:Request, res:Response): Promise<void> => {
    try {
        const post: myPost = new Post({
            title: req.body.title,
            content: req.body.content,
        });
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

const individualPost = async(req:Request, res:Response): Promise<void> => {
    try {
        const post: myPost | null = await Post.findById(req.params.id);

        if (!post) {
            res.status(404).send({ error: 'Post not found' });
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
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

const deleteItem = async(req:Request, res:Request): Promise<void> => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        
        if (!deletedPost) {
            res.status(404).send({ error: 'Post not found' });
            return;
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

export { addNewPost, individualPost, deleteItem, getPost };