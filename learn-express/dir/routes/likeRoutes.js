"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likeController_1 = require("../controllers/likeController");
const router = express_1.default.Router();
// Routes for comments
router.post('/blogs/:id/likes', likeController_1.likeBlog);
router.get('/blogs/:id/likes', likeController_1.getLikes);
// router.get('/blogs/:id/comments/:id', getComment);
// router.patch('/blogs/:id/comments/:id', updateComment);
// router.delete('/blogs/:id/comments/:id', deleteComment);
exports.default = router;
