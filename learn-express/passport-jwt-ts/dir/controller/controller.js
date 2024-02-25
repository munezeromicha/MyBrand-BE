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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
// import userPost from '../src/models/user';
const authUtils_1 = require("../authUtils");
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield userService.createUser(username, password);
        if (!user) {
            return res.status(400).json({ error: 'User creation failed' });
        }
        const token = (0, authUtils_1.signToken)({ username: user.username });
        // ... (send response with token, etc.)
    }
    catch (error) {
        console.error(`Error during signup: ${error}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield userService.authenticate(username, password);
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const token = (0, authUtils_1.signToken)({ username: user.username });
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;
