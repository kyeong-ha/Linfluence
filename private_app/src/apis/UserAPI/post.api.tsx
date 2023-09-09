import express, { Request, Response, Router } from 'express';
import { StatusCode } from '@modules/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Post'
router.post('/:influencerId', async (req: Request, res: Response) => {
    console.log('df');
    console.log(req.body);
    console.log(req.params.influencerId)
    try {
        const data = {
            ...req.params,
            ...req.body,
        };
        const post = await prisma.post.create({ data });
        console.log(post)
        res.status(StatusCode.CREATED).json(post);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});

// Read a 'All Post' of Inflencer by id
router.get('/', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.findMany({
            where: { influencerId: req.query.influencerId },
            orderBy: { createdAt: 'desc' }
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

// Read a 'Single Post' by id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: req.params.id }
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Post' by id
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Post' by id
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.delete({
            where: { id: req.params.id },
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;