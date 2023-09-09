import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function getYoutubeBanner(channelId: string): Promise<string> {
    try {
        const url = `https://www.youtube.com/channel/${channelId}`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);
        let bannerUrl = $('#header > ytd-c4-tabbed-header-renderer').css('--yt-channel-banner')
        
        if(bannerUrl !== undefined)
            bannerUrl = bannerUrl.replace(/url\((.+)\)/, '$1');

        return bannerUrl || '';
    }catch (err) {
        console.error('Error fetching channel banner:', err);
        return '';
    }
}