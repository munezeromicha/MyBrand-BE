import mongoose, { Document, Schema } from 'mongoose';
export interface ILike extends Document {
    userId?: number;
    blog: string;
  }
  
  
  const LikeSchema: Schema = new Schema({
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   },
    userId: { type: Number, default: 0}
  });

export default mongoose.model<ILike>('Like', LikeSchema);
