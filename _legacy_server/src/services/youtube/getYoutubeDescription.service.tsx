import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeDescription(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/channel/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);
        let desc = $('#description-container > #description').text()
        
        return desc || '';
    }catch (err) {
        console.error('Error fetching channel description:', err);
        return '';
    }
}