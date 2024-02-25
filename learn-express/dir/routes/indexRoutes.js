"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import Joi from 'joi';
// import Blog, { IBlog } from '../models/Blog';
const Controller_1 = require("../controllers/Controller");
const router = express_1.default.Router();
// Create a blog
router.post('/blogs', Controller_1.createPost);
// Read all blogs
router.get('/blogs', Controller_1.readAll);
// Read a blog by ID
router.get('/blogs/:id', Controller_1.readById);
// Add a comment to a blog
// router.post('/blogs/:id/comments', addComments);
// read comment by ID
router.get('/blogs/:id/comments');
// Like a blog
// router.post('/blogs/:id/like', addLike);
//delete a blog
router.delete("/blogs/:id", Controller_1.deleteItem);
exports.default = router;
