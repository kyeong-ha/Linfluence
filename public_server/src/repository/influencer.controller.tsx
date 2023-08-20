const influencerRepo = AppDataSource.getRepository(Influencer);

app.get("/:influencer", (req: Request, res: Response) => {
    var sql: string = "select * from test where Influencer=" + req.params.influencer.name;
    conn.query(sql, (err: error, result: result) => {
        if (err) console.log("query is not excuted: " + err);
        else {
            console.log(result.body);
            res.send(result);
        }
    });
});

export async function saveInfluencer (req: Request, res: Response){
    await influencerRepo.save(req.body) // save the data
    .then((influ) => {
        res.send(influ); // response the saved info
    })
    .catch((err) => console.log(err));
}