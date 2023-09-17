import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeProfileImg(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/channel/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);
        let imgUrl = $('#img').attr('src')
        
        return imgUrl || '';
    }catch (err) {
        console.error('Error fetching channel img:', err);
        return '';
    }
}