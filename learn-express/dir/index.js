"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const likeRoutes_1 = __importDefault(require("./routes/likeRoutes"));
const queryRoutes_1 = __importDefault(require("./routes/queryRoutes"));
// Connect to MongoDB database
mongoose_1.default.connect("mongodb://localhost:27017/micka")
    .then(() => {
    const app = (0, express_1.default)();
    const port = 4000;
    app.use(express_1.default.json());
    app.use("/api", indexRoutes_1.default);
    app.use("/api", commentRoutes_1.default);
    app.use("/api", likeRoutes_1.default);
    app.use("/api", queryRoutes_1.default);
    app.listen(port, () => {
        console.log(`Server has started at http://localhost${port}`);
    });
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
