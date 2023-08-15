const cilpRepository = AppDataSource.getRepository(Clip);

export async function saveClip (req: Request, res: Response){
    await cilpRepository.save(req.body) // save Data
    .then((clip) => {
        res.send(clip); // response the saved info
    })
    .catch((err) => console.log(err));
}