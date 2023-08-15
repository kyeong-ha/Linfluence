import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import path from "path";

import { AppDataSource } from "./data-source";
import { Clip, Product } from "./entity/Clips";
import { YoutubeVideo, Influencer, SnsLinks } from './entity/Influencers';

dotenv.config();
// const app = express();
const PORT = process.env.PORT || 5001;

AppDataSource.initialize().then(async () => {
    // create express app
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));

    // app.post('/api/clip', (req: Request, res: Response) => {
    //     console.log(req.body);
    //     const clip = AppDataSource.getRepository(Clip).create(req.body)
    //     const product = AppDataSource.getRepository(Product).create(req.body.products)
    //     AppDataSource.getRepository(Product).save(product)
    //     const results = AppDataSource.getRepository(Clip).save(clip)
    //     res.send(results);
    // });

    app.post('/api/influ', (req: Request, res: Response) => {
        const influ = AppDataSource.getRepository(Influencer).create(req.body)
        
        const youtubeVideo = AppDataSource.getRepository(YoutubeVideo).create(req.body.youtubeVideos)
        AppDataSource.getRepository(YoutubeVideo).save(youtubeVideo)
        const clip = AppDataSource.getRepository(Clip).create(req.body.youtubeVideos.clips)
        AppDataSource.getRepository(Clip).save(clip)
        const product = AppDataSource.getRepository(Product).create(req.body.youtubeVideos.clips.products)
        AppDataSource.getRepository(Product).save(product)
        const snsLink = AppDataSource.getRepository(SnsLinks).create(req.body.snsLinks)
        AppDataSource.getRepository(SnsLinks).save(snsLink)

        const results = AppDataSource.getRepository(Influencer).save(influ)
        res.send(results);
    });


    // run app
    app.listen(PORT);

}).catch(error => console.log(error))

// export default app;