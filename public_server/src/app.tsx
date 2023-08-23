import express, { Request, Response } from "express";
import path from "path";
import * as dotenv from 'dotenv';

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// Influnecer 신규추가
app.post('/influencer/signup', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const res = await prisma.influencer.createMany({
            data,
            skipDuplicates:true
        });
    
        console.log("Created a user sucessfully", res);
    } catch (err) {
        console.log("Create a user Error:", err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
});

// Influencer 조회
app.get('/influencer/:id', async (req: Request, res: Response) => {
    console.log(req.params.id)
    try {
        const result = await prisma.influencer.findUnique({
            where: {
                id: req.params.id,
            }
        })
        console.log("Finded User: ", result);
        res.send(result)
    } catch (err) {
        console.log("Read a user Error:", err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
});

// Create Post
app.post('/:id/post/create', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const res = await prisma.post.create({
            data
        });
    
        console.log("Created a post sucessfully", res);
    } catch (err) {
        console.log("Create a post Error:", err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
});

// Read Post
app.get('/:id/post', async (req: Request, res: Response) => {
    try {
        const result = await prisma.influencer.findMany({
            where: {
                id: req.params.id,
            }
        })
        console.log("Finded User: ", result);
        res.send(result)
    } catch (err) {
        console.log("Read a user Error:", err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
});

// Create Clip
app.post('/:id/clip/create', async (req: Request, res: Response) => {
    try {
        const data = req.body;
        await prisma.post.createMany({
            data,
            skipDuplicates:true
        });
    
        console.log("Created a post sucessfully", res);
    } catch (err) {
        console.log("Create a post Error:", err);
    } finally {
        async () => {
            await prisma.$disconnect();
        };
    }
});


app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`)
});