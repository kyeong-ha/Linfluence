const influencerRepo = AppDataSource.getRepository(Influencer);

export async function saveInfluencer (req: Request, res: Response){
    await influencerRepo.save(req.body) // save the data
    .then((influ) => {
        res.send(influ); // response the saved info
    })
    .catch((err) => console.log(err));
}