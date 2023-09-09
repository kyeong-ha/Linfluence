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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const showroom_api_1 = __importDefault(require("./showroom.api"));
const service = (0, showroom_api_1.default)();
const ClipApiController = express_1.default.Router();
ClipApiController.get('/:userId/:youtubeTitle', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let index = 1;
    // 파일형식에 따라 분류
    // 1. .mp4 => IClip
    // 2. .png => IScreenshot
    // 3. .json => IClipDataJson
    const httpResp = yield service.S3(req.params.userId, req.params.youtubeTitle, req.params.fileName);
    res.send(httpResp);
}));
exports.default = ClipApiController;
//# sourceMappingURL=showroom.controller.js.map