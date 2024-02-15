// const express = require("express")
import express from "express";
const router = express.Router()
import { addNewPost, deleteItem, getPost, individualPost } from "../controllers/postController.js";

router.get("/posts", getPost);

router.post("/posts", addNewPost);

router.get("/posts/:id", individualPost);

router.delete("/posts/:id", deleteItem);

// module.exports = router

export default router