import mongoose, { Schema, Document } from "mongoose";
import Comment from "../models/modelComments"; // Import the Comment model

export interface IPost extends Document {
  title: string;
  content: string;
  image: string;
  like: number;
  comments: Comment[]; // Reference to comments
}

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
      required: false,
    },
    like: {
      type: Number,
      default: 0,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] // Reference to comments
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("Post", PostSchema);
