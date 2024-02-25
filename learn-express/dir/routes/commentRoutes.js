"use strict";
// src/routes/commentRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentsController_1 = require("../controllers/commentsController");
const router = express_1.default.Router();
// Routes for comments
router.post('/blogs/:id/comments', commentsController_1.addComment);
router.get('/blogs/:id/comments/:id', commentsController_1.getComment);
router.patch('/blogs/:id/comments/:id', commentsController_1.updateComment);
router.delete('/blogs/:id/comments/:id', commentsController_1.deleteComment);
exports.default = router;
