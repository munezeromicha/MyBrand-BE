import { Request, Response } from "express";
import cloudinary from "../helper/cloudinary";
import Blog from '../models/blog'
import Post, { Ipost } from "../models/blog";
import { postSchema } from "../utils/validate";


const createPost = async (req: Request, res: Response) => {
  try {
    const { error, value } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const { title, content } = value;
    if (!req.file) {
      return res.status(400).json({ error: "There is no file to display" });
    }
    const exist = await Post.findOne({ title });
    if (exist) {
      return res.status(400).json({ error: "already exists" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    const post = await Post.create({
      title,
      content,
      image: result.secure_url,
    });
    return res.status(201).json(post);
  } catch (e) {
    return res.status(500).json();
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const updatePost = async (req: Request, res: Response) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     const updated = await Post.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           title: req.body.title,
//           content: req.body.content,
//           image: req.body.image,
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json({
//       updated
//     });
//   } catch (error) {
//     res.status(500).json({ status: "error", error: "hello" });
//   }
// };

const updatePost=async(req:Request,res:Response)=>{
  try {
    const post=await Post.findById(req.params.id);
    const updated = await Post.findByIdAndUpdate(req.params.id,{$set:{
        title:req.body.title, 
        desc:req.body.desc,
        image:req.body.image,
      }},{new:true});
      res.status(200).json({
        status:"success",
        data:updated
      });
    } catch (error) {
        res.status(500).json({status:"error", error: 'Occurred' });
      }
}

const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    try {
      if (post) {
        await post.deleteOne();
      }
      res.status(200).json({message: "Blog deleted"});
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const username = req.query.user;
  try {
    let posts;
    posts = await Post.find();
    // const convert = posts.length;
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

 const Likes = async(req: Request, res: Response)=> {
  try {
    const { id } = req.params;
    const blog = await Post.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    blog.like++; // here i Incremented likes..
    await blog.save();
    res.status(200).json({ likes: blog.like });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export { createPost, getAllPost, getPost, updatePost, deletePost, Likes };
