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
// Create a new 'Product'
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const product = yield prisma.product.create({ data });
        res.status(Response_lib_1.StatusCode.CREATED).json(product);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.SERVICE_UNAVAILABLE).json(err);
    }
}));
// Read a 'Single Product' by id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.findUnique({
            where: { id: req.params.id }
        });
        res.status(Response_lib_1.StatusCode.OK).send(product);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Update a 'Single Product' by id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(Response_lib_1.StatusCode.OK).send(product);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
// Delete a 'Single Product' by id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.delete({
            where: { id: req.params.id },
        });
        res.status(Response_lib_1.StatusCode.OK).send(product);
    }
    catch (err) {
        res.status(Response_lib_1.StatusCode.DB_ERROR).json(err);
    }
}));
module.exports = router;
//# sourceMappingURL=product.api.js.map