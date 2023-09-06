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
const Crawler_service_1 = require("../crawlers/Crawler.service");
const cheerio_1 = __importDefault(require("cheerio"));
function getYoutubeBanner(channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://www.youtube.com/channel/${channelId}`;
            const html = yield (0, Crawler_service_1.Crawler)(url);
            const $ = cheerio_1.default.load(html);
            let bannerUrl = $('#header > ytd-c4-tabbed-header-renderer').css('--yt-channel-banner');
            if (bannerUrl !== undefined)
                bannerUrl = bannerUrl.replace(/url\((.+)\)/, '$1');
            return bannerUrl || '';
        }
        catch (err) {
            console.error('Error fetching channel banner:', err);
            return '';
        }
    });
}
exports.default = getYoutubeBanner;
//# sourceMappingURL=getYoutubeBannerImg.services.js.map