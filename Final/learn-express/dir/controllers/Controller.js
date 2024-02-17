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
const postModel_1 = __importDefault(require("../models/postModel"));
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postModel_1.default.find();
        res.send(posts);
    }
    catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.getPost = getPost;
const addNewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new postModel_1.default({
            title: req.body.title,
            content: req.body.content,
        });
        yield post.save();
        res.status(201).send(post);
    }
    catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.addNewPost = addNewPost;
const individualPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        if (!post) {
            res.status(404).send({ error: 'Post not found' });
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
        res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.individualPost = individualPost;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPost = yield postModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            res.status(404).send({ error: 'Post not found' });
            return;
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.deleteItem = deleteItem;
