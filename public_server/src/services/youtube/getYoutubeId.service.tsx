import { Crawler } from "../crawlers/Crawler.service";

export default async function getYoutubeId(customId: string): Promise<string> {
    try {
        const url = `view-source:https://www.youtube.com/@${customId}`;
        const pageContent = await Crawler(url);
        const id = pageContent.match(/\/channel\/([\w-]{24,})/);

        return id?.[1] || '';
    } catch (error) {
        console.error('An error occurred:', error);
        return '';
    }
}