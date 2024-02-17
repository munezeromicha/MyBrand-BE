"use strict";
// src/controllers/likeController.ts
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
exports.getAllLikes = exports.addLike = void 0;
const joi_1 = __importDefault(require("joi"));
const Like_1 = __importDefault(require("../models/Like"));
// Joi schema for like validation
const likeSchema = joi_1.default.object({
    userID: joi_1.default.string().required()
});
const addLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const { error } = likeSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { userID } = req.body;
        // Create a new like
        const like = new Like_1.default({
            userID
        });
        // Save the like to the database
        const savedLike = yield like.save();
        res.status(201).json(savedLike);
    }
    catch (error) {
        console.log(error);
        // res.status(500).json({ error: err.message });
    }
});
exports.addLike = addLike;
const getAllLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all likes
        const likes = yield Like_1.default.find();
        res.json(likes);
    }
    catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error);
    }
});
exports.getAllLikes = getAllLikes;
