import { Request, Response } from 'express';
import PostModel from '../models/Blog';
import inLike from '../models/Like';
import inComment from '../models/Comment';
import Joi from 'joi';


const createPost = async (req: Request, res: Response): Promise<void> => {
    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
      });
    
      const { error } = schema.validate(req.body);
      if (error){
         res.status(400).send(error.details[0].message);
         return;
      } 
    
      try {
        const blog = new PostModel(req.body);
        await blog.save();
        res.status(201).send(blog);
      } catch (err) {
        res.status(500).send(err);
      }
};

const readAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const blogs = await PostModel.find().populate({
          path: "comments" // in blogs, populate comments
       });
        res.send(blogs);
      } catch (err) {
        res.status(500).send(err);
      }
};

// const readAllComments = async (req: Request, res: Response): Promise<void> => {
//   try {
//       const blogs = await inComment.find().populate({
//         path: "comments" // in blogs, populate comments
//      });
//       res.send(blogs);
//     } catch (err) {
//       res.status(500).send(err);
//     }
// };

const readById = async (req: Request, res: Response): Promise<void> => {
    try {
        const blog = await PostModel.findById(req.params.id).populate('comments');
        if (!blog){
             res.status(404).send('Blog not found');
             return;
        } 
        res.send(blog);
      } catch (err) {
        res.status(500).send(err);
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

// const addComments = async ( req: Request, res: Response): Promise<void> => {
//     const schema = Joi.object({
//         comment: Joi.string().required(),
//       });
    
//       const { error } = schema.validate(req.body);
//       if (error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }
    
//       try {
//         const blog = await PostModel.blog.findById(req.params.id);
//         if (!blog) {
//         res.status(404).send('Blog not found');
//         return;
//     }
    
//     let newComment = new inComment({
//       blog: req.params.id, 
//       body: req.body.comment
//    });
   
//    await newComment.save()
//    await blog.save();
//         // await blog.save();
    
//         res.status(201).send(blog);
//       } catch (err) {
//         res.status(500).send(err);
//       }
// }

// const addLike = async(req: Request, res: Response) => {
//     const schema = Joi.object({
//       userId: Joi.string().required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) {
//       res.status(400).send(error.details[0].message);
//       return;
//   }
  
//     try {
//       const blog = await PostModel.blog.findById(req.params.id);
//       if (!blog) return res.status(404).send('Blog not found');
  

//       let newLike = new inLike({
//         blog: req.params.id, 
//         userId: req.body.userId
//      });
     
//      await newLike.save();
//      await blog.save();
  
//       res.status(201).send(blog);
//     } catch (err) {
//       res.status(500).send(err);
//     }
// }

// export const likeBlog = async(req: Request, res: Response)=> {
//   try {
//     const { id } = req.params;
//     const blog = await PostModel.findById( id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     blog.likes++; // here i Incremented likes..
//     await blog.save();
//     res.status(200).json({ likes: blog.likes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

export {
    readAll,
    readById,
    deleteItem,
    createPost,
    // addComments,
    // addLike,
};
