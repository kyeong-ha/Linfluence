import express, { Request, Response } from 'express';
import path from "path";

import * as dotenv from 'dotenv';
import { getYouTubeChannelBanner } from './api/crawlers/YoutubeChannel.api'


dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./index'));

// import {crawl} from './utils/crawlers/youtube_crawler.util'
import cheerio from "cheerio";

app.get('/crawl', async (req: Request, res: Response) => {
    const channelId = 'Bellyvely';
    const bannerUrl = await getYouTubeChannelBanner(channelId);

    if (bannerUrl) {
        console.log('Banner URL:', bannerUrl);
    } else {
        console.log('Banner image not found for the channel.');
    }
    // const result = await crawlYoutubeChannel();
    // const $ = cheerio.load(result);
    // const attr = $('ytd-c4-tabbed-header-renderer')
    // // const attr = $('html > body').children('script[nonce=xdePNTSu7-MPqMkcTK-SYg]')
    // // ytd-app > #content > #page-manager > ytd-browse > #header > #contentContainer > #channel-container > #channel-header > #channel-header-container > #avatar > #img')
    // console.log(attr.html())
    // res.json(attr.html());
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
    
});