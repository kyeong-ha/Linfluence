import express from "express";
import * as dotenv from 'dotenv';
import path from "path";

import { AppDataSource } from "./data-source";
// import sequelzie from "./db/models/index";
// import ClipApiController from './api/showroom.controller';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// app.use(express.static(path.join(__dirname, '../public')));
// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// app.listen(PORT, async () => {
//     console.log(`Server started: http://localhost:${PORT}`);
// });

AppDataSource.initialize().then(async () => {
    // create express app
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));

    // run app
    app.listen(PORT);

}).catch(error => console.log(error))

export default app;