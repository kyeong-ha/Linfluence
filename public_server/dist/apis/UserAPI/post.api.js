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
// Create a new 'Post'
router.post('/:influencerId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('df');
    console.log(req.body);
    console.log(req.params.influencerId);
    try {
        const data = Object.assign(Object.assign({}, req.params), req.body);
        const post = yield prisma.post.create({ data });
        console.log(post);
        res.status(Response_lib_1.StatusCode.CREATED).json(post);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.SERVICE_UNAVAILABLE).json(err);
    }
}));
// Read a 'All Post' of Inflencer by id
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.post.findMany({
            where: { influencerId: req.query.influencerId },
            orderBy: { createdAt: 'desc' }
        });
        res.status(Response_lib_1.StatusCode.OK).send(post);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Read a 'Single Post' by id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.post.findUnique({
            where: { id: req.params.id }
        });
        res.status(Response_lib_1.StatusCode.OK).send(post);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Update a 'Single Post' by id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.post.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(Response_lib_1.StatusCode.OK).send(post);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Delete a 'Single Post' by id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.post.delete({
            where: { id: req.params.id },
        });
        res.status(Response_lib_1.StatusCode.OK).send(post);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
module.exports = router;
//# sourceMappingURL=post.api.js.map