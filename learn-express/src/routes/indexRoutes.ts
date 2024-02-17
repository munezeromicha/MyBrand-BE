import express, { Router } from "express";
import { addNewPost, deleteItem, getPost, individualPost } from "../controllers/Controller";

const router: Router = express.Router();

router.get("/blog", getPost);

router.post("/blog", addNewPost);

router.get("/blog/:id", individualPost);

router.delete("/blog/:id", deleteItem);


export default router;
