// const mongoose = require("mongoose")
import mongoose from "mongoose"

const schema = mongoose.Schema({
    title:String,
    content:String,
    Date:{ type: Date, default:Date.now}
})

//Defining Mongoose Schemas on comments and likes

const likesSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectID, ref: 'user', required: true},
    userID:{type:mongoose.Schema.Types.ObjectID, ref: 'user', required: true},
});
const commentSchema = new mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectID, ref: 'user', required: true},
    userID:{type:mongoose.Schema.Types.ObjectID, ref: 'user', required: true},
    text:{type: String, required: true},
});

const Likes = mongoose.model('likes', likesSchema);
const Comments = mongoose.model('comments', commentSchema);

//Above Defining Mongoose Schemas on comments and likes

// module.exports = mongoose.model("Post",schema)
export default mongoose.model("Post",schema,Likes,Comments)