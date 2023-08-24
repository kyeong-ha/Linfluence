import express, { Request, Response, Router } from 'express';
import { StatusCode } from '../_lib/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();


// Create a new 'Post'
router.post('/post', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const post = await prisma.post.create({ data });
        
        res.status(StatusCode.CREATED).json(post);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});


// Read a 'Single Post' by id
router.get('/post/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: req.params.id }
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Post' by id
router.put('/post/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Post' by id
router.delete('/post/:id', async (req: Request, res: Response) => {
    try {
        const post = await prisma.post.delete({
            where: { id: req.params.id },
        });
        res.status(StatusCode.OK).send(post);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;