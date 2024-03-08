import mongoose from "mongoose"

export interface likes {
    blog: String,
    user: String,
    userLike: Boolean

}

const likeSchema = new mongoose.Schema<likes>({
    blog: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true
    },
    userLike:{
        type: Boolean,
        default: true
    }
})

export default mongoose.model<likes>('Likes', likeSchema)