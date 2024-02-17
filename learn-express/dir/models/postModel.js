"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const showPost = new mongoose_1.Schema({
    title: String,
    content: String
});
exports.default = mongoose_1.default.model("Post", showPost);
// In Mongoose, Schema and Document play key roles in defining the structure of data and representing individual instances of data, respectively.
// Schema: The Schema class in Mongoose is used to define the structure of documents within a collection. It allows you to specify the fields, their types, default values, validators, and other options for the documents in the collection. Essentially, a schema is a blueprint that defines the shape of documents that can be stored in the MongoDB collection.
// Document: A Document in Mongoose represents an instance of a schema. It is an object that contains data conforming to the structure defined by the schema. Each document corresponds to a single record in the MongoDB collection. Documents have properties and methods provided by Mongoose for interacting with the data, such as saving, updating, and deleting.
