
import mongoose, { Document, Schema } from 'mongoose';

export interface Comment extends Document {
    text: string;
    createdAt: Date;
}

const commentSchema: Schema = new Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<Comment>('Comment', commentSchema);
