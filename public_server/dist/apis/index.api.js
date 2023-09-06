"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/influencer', require('./UserAPI/influencer.api'));
router.use('/post', require('./UserAPI/post.api'));
router.use('/clip', require('./UserAPI/clip.api'));
router.use('/product', require('./UserAPI/product.api'));
module.exports = router;
//# sourceMappingURL=index.api.js.map