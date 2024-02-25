"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikes = exports.likeBlog = void 0;
const Like_1 = __importDefault(require("../models/Like"));
const Blog_1 = __importDefault(require("../models/Blog"));
const likeBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blog = yield Blog_1.default.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        const newLike = new Like_1.default({
            blog: blog.id,
        });
        yield newLike.save();
        const numberLike = yield Like_1.default.countDocuments({ blog: req.params.id }).exec();
        const payload = {
            message: 'liked',
            likes: numberLike
        };
        res.status(201).json(payload);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.likeBlog = likeBlog;
const getLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield Like_1.default.find({ blog: req.params.id });
        if (!all) {
            res.status(404).json({ message: 'not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'not found' });
    }
});
exports.getLikes = getLikes;
