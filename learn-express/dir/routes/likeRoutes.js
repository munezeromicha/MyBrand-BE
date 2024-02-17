"use strict";
// src/routes/likeRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likeController_1 = require("../controllers/likeController");
const router = express_1.default.Router();
// Routes for likes
router.post('/likes:id', likeController_1.addLike);
router.get('/likes:id', likeController_1.getAllLikes);
exports.default = router;
