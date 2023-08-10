import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import path from "path";

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('Server started');
});