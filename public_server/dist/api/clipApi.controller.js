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
const clipApi_service_1 = __importDefault(require("./clipApi.service"));
const service = (0, clipApi_service_1.default)();
const ClipApiController = express_1.default.Router();
ClipApiController.get('/:userId/:youtubeTitle/:fileName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const httpResp = yield service.S3(req.params.userId, req.params.youtubeTitle, req.params.fileName);
    res.send(httpResp);
}));
exports.default = ClipApiController;
//# sourceMappingURL=clipApi.controller.js.map