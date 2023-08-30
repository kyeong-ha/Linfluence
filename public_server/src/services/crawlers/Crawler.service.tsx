import puppeteer from 'puppeteer';

export async function Crawler(url: string): Promise<string> {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.goto(`url`);
        const result = await page.content();
        await browser.close();
        
        return result ? result : '';
    } catch(err) {
        console.error('Error fetching channel:', err);
        return '';
    }
}