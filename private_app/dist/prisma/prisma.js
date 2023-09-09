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
const getYoutubeId_service_1 = __importDefault(require("../services/youtube/getYoutubeId.service"));
const getYoutubeName_service_1 = __importDefault(require("../services/youtube/getYoutubeName.service"));
const getYoutubeDescription_service_1 = __importDefault(require("../services/youtube/getYoutubeDescription.service"));
const getYoutubeProfileImg_services_1 = __importDefault(require("../services/youtube/getYoutubeProfileImg.services"));
const getYoutubeBannerImg_services_1 = __importDefault(require("../services/youtube/getYoutubeBannerImg.services"));
// import getYoutubeSnsLink from "../services/youtube/getYoutubeSnsList.services";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Create a the 'Influencer' if it doesn't exist
function createInfluencer(channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const youtubeId = yield (0, getYoutubeId_service_1.default)(channelId);
            const name = yield (0, getYoutubeName_service_1.default)(youtubeId);
            const description = yield (0, getYoutubeDescription_service_1.default)(youtubeId);
            const profileImg = yield (0, getYoutubeProfileImg_services_1.default)(youtubeId);
            const bannerImg = yield (0, getYoutubeBannerImg_services_1.default)(youtubeId);
            const data = {
                influencerId: channelId,
                youtubeId: youtubeId,
                name: name,
                description: description,
                profileImg: profileImg,
                bannerImg: bannerImg,
            };
            const newInfluecner = yield prisma.influencer.create({ data });
            console.log(newInfluecner);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.default = createInfluencer;
;
//# sourceMappingURL=prisma.js.map