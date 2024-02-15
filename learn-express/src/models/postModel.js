"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var showPost = new mongoose_1.Schema({
    title: String,
    content: String
});
exports.default = mongoose_1.default.model("Post", showPost);
