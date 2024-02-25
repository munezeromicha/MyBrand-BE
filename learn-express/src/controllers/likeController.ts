import Like from '../models/Like';
import Blog from '../models/Blog';
import { Request, Response } from 'express';


export const likeBlog = async(req: Request, res: Response)=> {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      const newLike = new Like({
        blog: blog.id,
      })
      await newLike.save();

      const numberLike = await Like.countDocuments({blog: req.params.id}).exec();
      
      const payload = {
        message: 'liked',
        likes: numberLike
      }

      res.status(201).json(payload);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  export const getLikes = async (req: Request, res: Response) => {
    try{
      const all = await Like.find({blog: req.params.id});
      if(!all){
        res.status(404).json({ message: 'not found'});
      }
    }
    catch (error) {
      res.status(500).json({error: 'not found'});
    }
  }