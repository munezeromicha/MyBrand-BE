import { Comment } from "../models/modelComments";
import Post from "../models/blog";
import { Request, Response } from "express";

const commentOn = async (req: Request, res: Response) => {
  try {
    // const { name, email, idea } = req.body;
    const blogId = req.params.id;
    const blog = await Post.findOne({ _id: blogId });
    if (!blog) {
      return res.status(404).send({ error: "Not Found" });
    }
    const newComment = new Comment({
      name: req.body.name, 
      email: req.body.email, 
      idea: req.body.idea, 
      blog: blog._id,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).send({ error: "Error Occurred" });
  }
};

const getComment = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    // const blog = await Comment.findOne({ _id: blogId });
    // if (!blog) {
    //   return res.status(404).send({ error: "Not found" });
    // }
    const comment = await Comment.find({blog: blogId});
    // const comNumber = comment.length;
    if (comment) {
      return res.status(200).json(comment);
  } else {
      res.status(404).json('That Comment Not exist');
  }
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};

const readAllComments = async (req: Request, res: Response) => {
  try {
    console.log('comment');
    const comment = await Comment.find();
    
    res.status(200).json(comment);
} catch (error) {
    res.status(404).json('The Comments were not found');
}
}


const updateComment = async (req: Request, res: Response) => {
  try {
    const blog = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(blog);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    await Comment.deleteOne({_id: req.params.id});
    res.status(200).json({message:"Comment Deleted"});
  } catch (error) {
    res.status(404).json("Not found");
  }
};

export { commentOn, getComment, deleteComment, updateComment, readAllComments};
