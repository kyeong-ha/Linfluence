import * as dotenv from "dotenv"
dotenv.config();

const config = {
    development : {
        username : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD || undefined,
        database : process.env.DB_DBNAME || 'test',
        host : process.env.DB_HOST || '127.0.0.1',
        dialect : "mysql"
    }
};

export default config;