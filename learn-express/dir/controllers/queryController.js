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
exports.getAllQueries = exports.addQuery = void 0;
const joi_1 = __importDefault(require("joi"));
const Query_1 = __importDefault(require("../models/Query"));
const querySchema = joi_1.default.object({
    queryText: joi_1.default.string().required()
});
const addQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = querySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { queryText } = req.body;
        const query = new Query_1.default({
            queryText
        });
        const savedQuery = yield query.save();
        res.status(201).json(savedQuery);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.addQuery = addQuery;
const getAllQueries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all queries
        const queries = yield Query_1.default.find();
        res.json(queries);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllQueries = getAllQueries;
