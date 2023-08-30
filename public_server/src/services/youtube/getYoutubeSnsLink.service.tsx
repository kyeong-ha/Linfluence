import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function YouTubeSnsLinkParser(channelId: string): Promise<string | null> {
    try {
        const url = `https://www.youtube.com/c/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);


        const linkObject: Record<string, string> = {};

        $('.yt-channel-external-link-view-model-wiz').each((index, element) => {
            const title = $(element).find('.yt-channel-external-link-view-model-wiz__title').text();
            const url = $(element).find('.yt-channel-external-link-view-model-wiz__link a').text();

            console.log(title, url);
            linkObject[title] = url || '';
        });

        console.log(linkObject);
        return 'success' || null;
    }catch (err) {
        console.error('Error fetching channel banner:', err);
        return null;
    }
}