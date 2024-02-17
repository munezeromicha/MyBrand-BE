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
exports.getPost = exports.deleteItem = exports.individualPost = exports.addNewPost = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Blog_1.default.find();
        res.send(posts);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPost = getPost;
const addNewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new Blog_1.default({
            title: req.body.title,
            content: req.body.content,
        });
        yield post.save();
        res.send(post);
    }
    catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
});
exports.addNewPost = addNewPost;
const individualPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Blog_1.default.findById(req.params.id);
        if (!post) {
            res.status(404).send({ error: "Post doesn't exist!" });
            return;
        }
        if (req.body.title) {
            post.title = req.body.title;
        }
        if (req.body.content) {
            post.content = req.body.content;
        }
        yield post.save();
        res.send(post);
    }
    catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
});
exports.individualPost = individualPost;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Blog_1.default.deleteOne({ _id: req.params.id });
        res.status(204).send();
    }
    catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
});
exports.deleteItem = deleteItem;
