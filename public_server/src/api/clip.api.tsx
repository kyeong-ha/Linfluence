import express, { Request, Response, Router } from 'express';
import { StatusCode } from '../_lib/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Clip'
router.clip('/clip', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const clip = await prisma.clip.create({ data });
        
        res.status(StatusCode.CREATED).json(clip);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});


// Read a 'Single Clip' by id
router.get('/clip/:id', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.findUnique({
            where: { id: req.params.id }
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Clip' by id
router.put('/clip/:id', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Clip' by id
router.delete('/clip/:id', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.delete({
            where: { id: req.params.id },
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;