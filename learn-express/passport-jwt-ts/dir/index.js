"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Now server has started!');
});
app.use('/api', auth_1.default);
app.listen(port, () => {
    console.log(`Now server has started at http://localhost${port}`);
});
