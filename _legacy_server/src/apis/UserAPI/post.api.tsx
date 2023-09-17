import express, { Request, Response, Router } from 'express';
import { StatusCode } from '@modules/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Post'
router.post('/:influencerId', async (req: Request, res: Response) => {
    try {
        const data = {
            influencerId: req.params.influencerId,
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
            orderBy: { postId: 'desc' }
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

// Read a 'Single Post' by postID
router.get('/:postId', async (req: Request, res: Response) => {
    console.log(req.params)
    try {
        const post = await prisma.post.findUnique({
            where: { postId: req.params.postId, influencerId: req.query.influencerId }
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Post' by postId
router.put('/:postId', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.update({
            where: { postId: req.params.postId },
            data: req.body,
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Post' by postId
router.delete('/:postId', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.delete({
            where: { postId: req.params.postId },
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;