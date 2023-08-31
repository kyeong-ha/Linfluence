import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeName(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/channel/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);
        
        let name = $('#text').text()
        return name || '';
    }catch (err) {
        console.error('Error fetching channel name:', err);
        return '';
    }
}