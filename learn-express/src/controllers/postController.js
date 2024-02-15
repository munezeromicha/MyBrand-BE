import Post from "../models/Post.js";

const getPost = async(req, res) => {
    const posts = await Post.find()
    res.send(posts)
}
const addNewPost = async(req, res) =>{
    const post = new Post({
        title:req.body.title,
        content:req.body.content,
    });
    await post.save()
    res.send(post)
}
const individualPost = async(req,res) => {
    try{
        const post = await Post.findOne({ _id:req.params.id })

        if(req.body.title){
          post.title = req.body.title
        }

        if(req.body.content){
          post.content = req.body.content
        }
        await post.save()
  res.send(post)  
  }catch{
      res.status(404)
      res.send({error: "Post doesn't exist!"})
  }
}

const deleteItem = async(req,res) => {
    try{
        await Post.deleteOne({_id:req.params.id})
        res.status(204).send()
    }catch{
res.status(404)
res.send({error: "Post doesn't exist"})
    }
}

export {addNewPost,individualPost,deleteItem,getPost};