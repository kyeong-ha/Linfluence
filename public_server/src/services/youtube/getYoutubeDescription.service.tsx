import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeDescription(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/c/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);
        let desc = $('#description').text()
        
        return desc;
    }catch (err) {
        console.error('Error fetching channel banner:', err);
        return '';
    }
}