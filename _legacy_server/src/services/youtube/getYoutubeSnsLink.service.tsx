import { Crawler } from "../crawlers/Crawler.service";
import cheerio from 'cheerio';

export default async function YouTubeSnsLinkParser(channelId: string): Promise<Record<string, string>> {
    try {
        const url = `https://www.youtube.com/channel/${channelId}/about`;
        const html = await Crawler(url);
        const $ = cheerio.load(html);


        const linkObject: Record<string, string> = {};

        $('.yt-channel-external-link-view-model-wiz').each((index, element) => {
            const title = $(element).find('.yt-channel-external-link-view-model-wiz__title').text();
            const url = $(element).find('.yt-channel-external-link-view-model-wiz__link a').text();

            console.log(title, url);
            linkObject[title] = url || '';
        });

        return linkObject;
    }catch (err) {
        console.error('Error fetching channel sns link:', err);
        return {'': ''};
    }
}