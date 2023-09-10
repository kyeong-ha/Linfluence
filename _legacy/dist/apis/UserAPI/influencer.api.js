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
const Response_lib_1 = require("@modules/Response.lib");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express_1.default.Router();
// Create a new 'Influencer'
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const influecner = yield prisma.influencer.create({ data });
        res.status(Response_lib_1.StatusCode.CREATED).json(influecner);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.SERVICE_UNAVAILABLE).json(err);
    }
}));
// Read a 'Single Influencer' by influencerId
router.get('/:influencerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.influencerId);
        const influencer = yield prisma.influencer.findUnique({
            where: { influencerId: req.params.influencerId }
        });
        res.status(Response_lib_1.StatusCode.OK).send(influencer);
        console.log(influencer);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Update a 'Single Influencer' by influencerId
router.put('/:influencerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const influencer = yield prisma.influencer.update({
            where: { influencerId: req.params.influencerId },
            data: req.body,
        });
        res.status(Response_lib_1.StatusCode.OK).send(influencer);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Delete a 'Single Influencer' by influencerId 
router.delete('/:influencerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const influencer = yield prisma.influencer.delete({
            where: { influencerId: req.params.influencerId },
        });
        res.status(Response_lib_1.StatusCode.OK).send(influencer);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
module.exports = router;
//# sourceMappingURL=influencer.api.js.map