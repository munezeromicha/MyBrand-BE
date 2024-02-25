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
exports.UserService = void 0;
const user_1 = require("../models/user");
const authUtils_1 = require("../authUtils"); // Implement secure hashing
class UserService {
    createUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield (0, authUtils_1.hashPassword)(password);
            const newUser = new user_1.UserModel({ username, password: hashedPassword });
            try {
                yield newUser.save();
                return newUser;
            }
            catch (error) {
                console.error(`Error creating user: ${error}`);
                return null;
            }
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.UserModel.findOne({ username });
        });
    }
    authenticate(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findByUsername(username);
            if (!user) {
                return null;
            }
            const passwordMatches = yield (0, authUtils_1.comparePassword)(password, user.password); // Use secure comparison
            return passwordMatches ? user : null;
        });
    }
}
exports.UserService = UserService;
