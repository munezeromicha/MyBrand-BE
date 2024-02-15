// const express = require("express")
// const mongoose = require("mongoose")
import express  from "express"
import mongoose from "mongoose"
import routes from "./src/routes/index.js"
// const routes =require("./src/routes/routes")

//Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/micka",{ useNewUrlParser: true })
.then(()=>{
const app = express()

app.use(express.json())

app.use("/api",routes)

 app.listen(9000,()=> {
    console.log("Server has started");
 })
})

