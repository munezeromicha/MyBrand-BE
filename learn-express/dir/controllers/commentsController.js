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
exports.deleteComment = exports.updateComment = exports.getComment = exports.addComment = void 0;
const joi_1 = __importDefault(require("joi"));
const Comment_1 = __importDefault(require("../models/Comment"));
// Joi schema for comment validation
const commentSchema = joi_1.default.object({
    text: joi_1.default.string().required()
});
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const { error } = commentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { text } = req.body;
        // Create a new comment
        const comment = new Comment_1.default({
            text
        });
        // Save the comment to the database
        const savedComment = yield comment.save();
        res.status(201).json(savedComment);
    }
    catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error);
    }
});
exports.addComment = addComment;
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield Comment_1.default.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Comment not found.' });
        }
        res.json(blog);
    }
    catch (error) {
        res.status(500).json({ error: 'error occurred.' });
    }
});
exports.getComment = getComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text } = req.body;
        // const { error } = postval.validate({ text });
        // if (error) {
        //   return res.status(400).json({ error: error.details[0].message });
        // }
        const blog = yield Comment_1.default.findByIdAndUpdate(req.params.id, { text }, { new: true });
        res.json(blog);
        // await blog?.save();
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Comment_1.default.deleteOne({ _id: req.params.id });
        res.status(204).send();
    }
    catch (error) {
        // res.status(500).send({ error: error.message });
        console.log(error);
    }
});
exports.deleteComment = deleteComment;
