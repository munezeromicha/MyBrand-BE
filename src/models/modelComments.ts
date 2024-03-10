import { Schema, Types, model, Document } from 'mongoose';

interface CommentModel extends Document {
    name?: string;
    email?: string;
    idea?: string;
    blog: Types.ObjectId;
}

const commentSchema = new Schema<CommentModel>({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
    },
    idea: {
        type: String,
        required: false
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
});

const Comment = model<CommentModel>('Comment', commentSchema);

export default Comment;
