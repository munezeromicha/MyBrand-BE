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
router.post('/comments:id', commentsController_1.addComment);
router.get('/comments:id', commentsController_1.getAllComments);
exports.default = router;
