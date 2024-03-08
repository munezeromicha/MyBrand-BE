import mongoose from "mongoose";
export interface Ipost {
  title: string;
  content: string;
  image: string;
  like: Boolean;
}

const PostSchema = new mongoose.Schema<Ipost>(
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
      type: Boolean,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model<Ipost>("Post", PostSchema);
