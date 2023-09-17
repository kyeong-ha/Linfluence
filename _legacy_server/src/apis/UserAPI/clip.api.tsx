import express, { Request, Response, Router } from 'express';
import { StatusCode } from '@modules/Response.lib';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router: Router = express.Router();

// Create a new 'Clip'
router.post('/', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const clip = await prisma.clip.create({ data });
      
        res.status(StatusCode.CREATED).json(clip);

    } catch(err) { res.status(StatusCode.SERVICE_UNAVAILABLE).json(err); }
});

// Read a 'All Clip' with { postId == postId && influencerId == influencerId}
router.get('/', async (req: Request, res: Response) => {
  try {
    console.log(req.query.postId);
      const clip = await prisma.clip.findMany({
          where: { postId: req.query.postId },
          orderBy: { clipId: 'asc' }
      });
      console.log(clip);
      res.status(StatusCode.OK).send(clip);

  } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

// Read a 'Single Clip' by id
router.get('/:clipId', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.findUnique({
            where: { id: req.params.clipId }
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Update a 'Single Clip' by id
router.put('/:clipId', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.update({
            where: { id: req.params.clipId },
            data: req.body,
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});


// Delete a 'Single Clip' by id
router.delete('/:clipId', async (req: Request, res: Response) => {
    try {
        const clip = await prisma.clip.delete({
            where: { id: req.params.clipId },
        });
        res.status(StatusCode.OK).send(clip);

    } catch(err) { res.status(StatusCode.DB_ERROR).json(err); }
});

module.exports = router;