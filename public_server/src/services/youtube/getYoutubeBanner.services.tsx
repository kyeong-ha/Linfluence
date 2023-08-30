import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeBanner(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/c/${channelId}`;
        const html = await YouTubeCrawler(url);
        const $ = cheerio.load(html);
        let bannerUrl = $('#header > ytd-c4-tabbed-header-renderer').css('--yt-channel-banner')
        
        return bannerUrl.replace(/url\((.+)\)/, '$1');
    }catch (err) {
        console.error('Error fetching channel banner:', err);
        return '';
    }
}