import "reflect-metadata";
import { DataSource } from "typeorm";
import { Clip, Product } from './entity/Clips';

import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "somes",
    database: "test",
    entities: [ Clip, Product ],
    synchronize: true,
    logging: true,
    migrations: [],
    subscribers: [],
});