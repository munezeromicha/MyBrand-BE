
import mongoose, { Document, Schema } from 'mongoose';

export interface Like extends Document {
    userID: mongoose.Types.ObjectId;
}

const likeSchema: Schema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model<Like>('Like', likeSchema);
