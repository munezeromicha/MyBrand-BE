import {Schema ,Types, model} from 'mongoose';

interface SCHpost {
    name:string,
    email:string,
    idea:string,
    blog:Types.ObjectId
}

const commentSchema = new Schema<SCHpost>({
    name: {
        type: 'string',
        required: false
    },
    email: {
        type: 'string',
        required: false,
    },
    idea: {
        type: 'string',
        required: false
    },
    
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
});
export const Comment = model<SCHpost>('Comment', commentSchema);









