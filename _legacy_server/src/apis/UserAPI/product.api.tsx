import express, { Request, Response, Router } from 'express';
import { StatusCode } from '@modules/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Product'
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const product = await prisma.product.create({ data });
        
        res.status(StatusCode.CREATED).json(product);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});


// Read a 'Single Product' by id
router.get('/:productId', async (req: Request, res: Response) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: req.params.productId }
        });
        res.status(StatusCode.OK).send(product);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Product' by id
router.put('/:productId', async (req: Request, res: Response) => {
    try {
        const product = await prisma.product.update({
            where: { id: req.params.productId },
            data: req.body,
        });
        res.status(StatusCode.OK).send(product);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Product' by id
router.delete('/:productId', async (req: Request, res: Response) => {
    try {
        const product = await prisma.product.delete({
            where: { id: req.params.productId },
        });
        res.status(StatusCode.OK).send(product);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});



module.exports = router;