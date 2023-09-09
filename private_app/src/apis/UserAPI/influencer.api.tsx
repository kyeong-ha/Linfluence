import express, { Request, Response, Router } from 'express';
import { StatusCode } from '@modules/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Influencer'
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const influecner = await prisma.influencer.create({ data });
        
        res.status(StatusCode.CREATED).json(influecner);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});


// Read a 'Single Influencer' by influencerId
router.get('/:influencerId', async (req: Request, res: Response) => {
    try {
        console.log(req.params.influencerId);
        const influencer = await prisma.influencer.findUnique({
            where: { influencerId: req.params.influencerId }
        });
        res.status(StatusCode.OK).send(influencer);
        console.log(influencer);
    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Influencer' by influencerId
router.put('/:influencerId', async (req: Request, res: Response) => {
    try {
        const influencer = await prisma.influencer.update({
            where: { influencerId: req.params.influencerId },
            data: req.body,
        });
        res.status(StatusCode.OK).send(influencer);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Influencer' by influencerId 
router.delete('/:influencerId', async (req: Request, res: Response) => {
    try {
        const influencer = await prisma.influencer.delete({
            where: { influencerId: req.params.influencerId },
        });
        res.status(StatusCode.OK).send(influencer);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;