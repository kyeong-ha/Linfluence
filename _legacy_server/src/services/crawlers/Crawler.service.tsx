import puppeteer from 'puppeteer';

/* 기능요약: props로 가져온 url을 open하여 HTML 코드를 가져옴. */
/* 리팩토링 계획: 유튜브 채널 크롤할 때, 이 함수를 1회만 부르도록 수정한다. (크롤링 시간이 너무 오래걸림) */

export async function Crawler(url: string): Promise<string> {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.goto(url);
        const result = await page.content();
        await browser.close();

        return result ? result : '';
    } catch(err) {
        console.error('Error fetching:', err);
        return '';
    }
}