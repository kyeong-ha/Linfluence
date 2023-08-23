import { AppDataSource } from "../data-source";
import { Influencer, YoutubeVideo, SnsLinks } from "../entity/Influencers";
import { Clip, Product } from "../entity/Clips";
import { Request, Response } from "express";

export default class InfluencerController {
    async function addInfluencer (req: Request, res: Response) => {
        let info = {
            name: req.body.name,
            snsLinks: req.body.snsLinks
        };
    
        const influencerRepo = AppDataSource.getRepository(Influencer);
        const user = userRepo.create(info);
    
        await userRepo
            .save(user)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => console.log(err));
        };
}