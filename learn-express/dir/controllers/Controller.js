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
exports.createPost = exports.deleteItem = exports.readById = exports.readAll = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const joi_1 = __importDefault(require("joi"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        title: joi_1.default.string().required(),
        content: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    try {
        const blog = new Blog_1.default(req.body);
        yield blog.save();
        res.status(201).send(blog);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.createPost = createPost;
const readAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield Blog_1.default.find().populate({
            path: "comments" // in blogs, populate comments
        });
        res.send(blogs);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.readAll = readAll;
// const readAllComments = async (req: Request, res: Response): Promise<void> => {
//   try {
//       const blogs = await inComment.find().populate({
//         path: "comments" // in blogs, populate comments
//      });
//       res.send(blogs);
//     } catch (err) {
//       res.status(500).send(err);
//     }
// };
const readById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield Blog_1.default.findById(req.params.id).populate('comments');
        if (!blog) {
            res.status(404).send('Blog not found');
            return;
        }
        res.send(blog);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.readById = readById;
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
