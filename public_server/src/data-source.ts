import "reflect-metadata";
import { DataSource } from "typeorm";
import { Clip, Product } from './entity/Clips';
import { YoutubeVideo, Influencer, SnsLinks } from './entity/Influencers';

import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "somes",
    database: "test",
    entities: [ Clip, Product, YoutubeVideo, Influencer, SnsLinks ],
    synchronize: true,
    logging: true,
    migrations: [],
    subscribers: [],
});