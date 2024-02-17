"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import express_1 from "express";
import mongoose_1 from "mongoose";
import index_1 from "./src/routes/indexRoutes";
// Connect to MongoDB database
mongoose_1.default.connect("mongodb://localhost:27017/micka")
    .then(function () {
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/api", index_1.default);
    app.listen(9000, function () {
        console.log("Server has started");
    });
})
    .catch(function (error) {
    console.error("Error connecting to MongoDB:", error);
});
