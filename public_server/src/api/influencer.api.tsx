import express, { Request, Response, Router } from 'express';
import { StatusCode } from '../_lib/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Influencer'
router.post('/influencer', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const influecner = await prisma.influencer.create({ data });
        
        res.status(StatusCode.CREATED).json(influecner);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});


// Read a 'Single Influencer' by id
router.get('/influencer/:id', async (req: Request, res: Response) => {
    try {
        const influencer = await prisma.influencer.findUnique({
            where: { id: req.params.id }
        });
        res.status(StatusCode.OK).send(influencer);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Influencer' by id
router.put('/influencer/:id', async (req: Request, res: Response) => {
    try {
        const influencer = await prisma.influencer.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(StatusCode.OK).send(influencer);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Influencer' by id
router.delete('/influencer/:id', async (req: Request, res: Response) => {
    try {
        const influencer = await prisma.influencer.delete({
            where: { id: req.params.id },
        });
        res.status(StatusCode.OK).send(influencer);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;