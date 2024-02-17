import express from "express";
import { addNewPost, deleteItem, getPost, individualPost } from "../controllers/Controller";

const router = express.Router();

router.get("/posts", getPost);

router.post("/posts", addNewPost);

router.get("/posts/:id", individualPost);

router.delete("/posts/:id", deleteItem);

export default router;