// const express = require("express")
import express from "express";
const router = express.Router()
import { addNewPost, deleteItem, getPost, giveComment, giveLike, individualPost, postComment, postLike } from "../controllers/postController.js";

router.get("/posts", getPost);

router.post("/posts", addNewPost);

router.get("/posts/:id", individualPost);

router.delete("/posts/:id", deleteItem);

// Router for likes and comments below:

router.post('/likes', postLike);
router.get('/likes', giveLike);

router.post('/comments', postComment);
router.post('/comments', giveComment);

// Router for likes and comments above.

// module.exports = router

export default router