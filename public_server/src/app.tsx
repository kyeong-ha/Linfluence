import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import path from "path";
import ClipApiController from './api/clipApi.controller';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/s3', ClipApiController);

app.listen('5002', () => {
    console.log('Server started');
});