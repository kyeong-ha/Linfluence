import "reflect-metadata";
import { DataSource } from "typeorm";
import { Clip } from './entity/Clips';

import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST || "127.0.0.1",
    port: 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_USERNAME || "undefined",
    database: process.env.DB_DBNAME || "test",
    entities: [ Clip ],
    synchronize: true,
    logging: true,
    migrations: [],
    subscribers: [],
});