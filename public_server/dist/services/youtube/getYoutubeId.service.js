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
const Crawler_service_1 = require("../crawlers/Crawler.service");
function getYoutubeId(customId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `view-source:https://www.youtube.com/@${customId}`;
            const pageContent = yield (0, Crawler_service_1.Crawler)(url);
            const id = pageContent.match(/\/channel\/([\w-]{24,})/);
            return (id === null || id === void 0 ? void 0 : id[1]) || '';
        }
        catch (error) {
            console.error('An error occurred:', error);
            return '';
        }
    });
}
exports.default = getYoutubeId;
//# sourceMappingURL=getYoutubeId.service.js.map