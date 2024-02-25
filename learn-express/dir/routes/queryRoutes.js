"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const queryController_1 = require("../controllers/queryController");
const router = express_1.default.Router();
router.post('blogs/:id/queries', queryController_1.addQuery);
router.get('blogs/:id/queries', queryController_1.getAllQueries);
exports.default = router;
