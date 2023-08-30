// import axios from "axios";
// // import { APIResponse } from '../../types/response.type';

// // interface IYoutubeChannel {
// //     youtubeId: string; // youtube 와 대응하는 식별자 (=id)
// //     influencerId: string; //우리 사이트에서 식별하기 위한 인플루언서 id (=customUrl)
// //     name: string; // 인플루언서 닉네임 (=title)
// //     description: string; // 바이오 (=description)
// //     profileImg: string; // 유튜브 프로필 이미지
// //     backgroundImg: string; // 유튜브 배경이미지
// // }

// export default async function crawlYoutubeChannel() {
//     const res = await axios.get(`https://www.youtube.com/c/Bellyvely`);
//     const data = res.data;
//     return data;
// }

import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

export async function getYouTubeChannelBanner(channelId: string): Promise<string | null> {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(`https://www.youtube.com/c/${channelId}`);

        // Extract the computed style and get the --yt-channel-banner value
        // const bannerUrl = await page.evaluate(() => {
        //     console.log(document.querySelector('body'));
        //     const element = document.querySelector('ytd-c4-tabbed-header-render');
        //     if (element !== null){
        //         const computedStyle = window.getComputedStyle(element);
        //         return computedStyle.getPropertyValue('--yt-channel-banner');
        //     }
        //     return null;
        // });

        const $ = cheerio.load(await page.content());
        let bannerUrl = $('#header > ytd-c4-tabbed-header-renderer').css('--yt-channel-banner')
        // const attr = $('html > body').children('script[nonce=xdePNTSu7-MPqMkcTK-SYg]')
        // ytd-app > #content > #page-manager > ytd-browse > #header > #contentContainer > #channel-container > #channel-header > #channel-header-container > #avatar > #img')
        
        await browser.close();
        
        if(bannerUrl !== undefined)
            bannerUrl = bannerUrl.replace(/url\((.+)\)/, '$1');

        return bannerUrl || null;
    } catch (error) {
        console.error('Error fetching channel banner:', error);
        return null;
    }
}