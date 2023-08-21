import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import path from "path";

import { AppDataSource } from "./data-source";
import { Clip, Product } from "./entity/Clips";
import { YoutubeVideo, Influencer, SnsLinks } from './entity/Influencers';

dotenv.config();
// const app = express();
const PORT = process.env.PORT || 5002;

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

    app.get("/influencer/:name", (req: Request, res: Response) => {
        // return clip by id
        console.log(req.params.name)
        const results = AppDataSource.getRepository(Influencer).findOneBy({
            name: req.params.name
        });

        console.log(results);
        return res.send(results)
        // var sql: string = "select * from test where Influencer=" + req.params.influencer.name;
        // conn.query(sql, (err: error, result: result) => {
        //     if (err) console.log("query is not excuted: " + err);
        //     else {
        //         console.log(result.body);
        //         res.send(result);
        //     }
        // });
    });

    app.post('/api/influ', (req: Request, res: Response) => {
        // const product = AppDataSource.getRepository(Product).create(req.body.youtubeVideos.clips.products)
        // AppDataSource.getRepository(Product).save(product)
        // const clip = AppDataSource.getRepository(Clip).create(        )
        // AppDataSource.getRepository(Clip).save(clip)

        const youtubeVideo = AppDataSource.getRepository(YoutubeVideo).create(req.body.youtubeVideos)
        AppDataSource.getRepository(YoutubeVideo).save(youtubeVideo)
        const snsLink = AppDataSource.getRepository(SnsLinks).create(req.body.snsLinks)
        AppDataSource.getRepository(SnsLinks).save(snsLink)

        const influ = AppDataSource.getRepository(Influencer).create({
            name: req.body.name,
            youtubeVideos: req.body.youtubeVideos,
            snsLinks: req.body.snsLinks
        })

        const results = AppDataSource.getRepository(Influencer).save(influ)
        res.send(results);
    });

    // run app
    app.listen(PORT);

}).catch(error => console.log(error))

// export default app;


// :/influencer => import the influencer from MySQL