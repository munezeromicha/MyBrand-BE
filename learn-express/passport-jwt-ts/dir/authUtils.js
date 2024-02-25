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
exports.verifyToken = exports.signToken = exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken")); // Or your preferred JWT library
// Replace with a strong secret key
const secret = 'Munezero2024!';
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt.genSalt(10); // Adjust rounds as needed
        return yield bcrypt.hash(password, salt);
    });
}
exports.hashPassword = hashPassword;
function comparePassword(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.compare(password, hashedPassword);
    });
}
exports.comparePassword = comparePassword;
function signToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '30m' }); // Adjust expiration as needed
}
exports.signToken = signToken;
// Optionally, a function to verify the JWT token:
function verifyToken(token) {
    try {
        return jwt.verify(token, secret);
    }
    catch (error) {
        console.error('Error verifying JWT:', error);
        return undefined;
    }
}
exports.verifyToken = verifyToken;
