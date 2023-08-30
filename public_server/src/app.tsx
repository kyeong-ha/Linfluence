import express, { Request, Response } from 'express';
import path from "path";

import * as dotenv from 'dotenv';
import getYouTubeChannelBanner from './services/youtube/getYoutubeBanner.services';
// import getYoutubeProfileImg from './services/parser/youtube/profileImg_parser.services';
import getYoutubeSnsLink from './services/youtube/getYoutubeSnsLink.service';
import getYoutubeName from './services/youtube/getYoutubeName.service';
import getYoutubeId from './services/youtube/getYoutubeId.service';

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./apis/index.api'));

app.get('/crawl', async (req: Request, res: Response) => {

    const url = 'https://www.youtube.com/@Bellyvely';
    const channelUrl = `view-source:${url}`;
    const channelId = await getYoutubeId(channelUrl);
    
    if (channelId) {
        console.log('Channel ID:', channelId);
    } else {
        console.log('Channel ID not found.');
    }
    
    // const channelId = 'Bellyvely';
    // const name = await getYoutubeName(channelId);

    // if (name) {
    //     console.log('Banner URL:', name);
    // } else {
    //     console.log('Banner image not found for the channel.');
    // }
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
    
});