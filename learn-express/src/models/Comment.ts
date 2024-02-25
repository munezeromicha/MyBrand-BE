import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  name: string;
  comment: string;
  blogId: string;
}

const CommentSchema = new Schema({
  blog: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Blog"
  },
  body: String
})
const comment = mongoose.model<IComment>('Comment', CommentSchema);
export default comment ;