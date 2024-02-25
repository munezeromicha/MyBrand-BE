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
exports.dbClient = void 0;
const mongodb_1 = require("mongodb");
const mongoUri = 'mongodb://localhost:27017/JWT'; // Replace with your credentials
const client = new mongodb_1.MongoDb(mongoUri);
// Optionally, connect and export the client:
const myFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
});
// Handle errors appropriately
exports.dbClient = client;
exports.default = {
    secret: 'Munezero2024!',
    mongoUri,
    // ...other configurations
};
