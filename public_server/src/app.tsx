import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import path from "path";
import sequelzie from "./db/models/index";
import ClipApiController from './api/showroom.controller';

// dotenv.config();
const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// app.use('/s3', ClipApiController);

app.listen(PORT, async () => {

    console.log(`Server started: http://localhost:${PORT}`);

    await sequelzie.authenticate()
    .then(async () => {
        console.log('Authentication successful');
    })
    .catch(e => {
        console.log(e)
    });

});

export default app;