// const mongoose = require("mongoose")
import mongoose from "mongoose"

const schema = mongoose.Schema({
    title:String,
    content:String,
})
// module.exports = mongoose.model("Post",schema)
export default mongoose.model("Post",schema)