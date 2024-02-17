"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = require("../controllers/Controller");
const router = express_1.default.Router();
router.get("/posts", Controller_1.getPost);
router.post("/posts", Controller_1.addNewPost);
router.get("/posts/:id", Controller_1.individualPost);
router.delete("/posts/:id", Controller_1.deleteItem);
exports.default = router;
