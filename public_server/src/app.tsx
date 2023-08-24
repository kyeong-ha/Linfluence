import express, { Request, Response, NextFunction } from "express";
import path from "path";
import * as dotenv from 'dotenv';

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./index'));

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`)
});