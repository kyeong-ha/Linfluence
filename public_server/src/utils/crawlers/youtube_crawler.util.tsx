import axios from "axios";
import cheerio from "cheerio";

// export default async function crawlYoutubeUser(){
//     try {
//         await axios.get(`https://www.youtube.com/c/Bellyvely`)
//             .then(html => {
//                 const $ = cheerio.load(html.data);
//                 // $.html();
//                 const result = $('#img','#channel-container').html();
//                 return result;
//             })
//         } catch (err) {
//             return console.log(err);
//         }
// }

// crawlYoutubeChannel

export const crawl = async () => {
	axios.get(`https://www.youtube.com/c/Bellyvely`)
    .then((html: any) => {
        console.log(html.data.avatar);
        const $ = cheerio.load(html);

        const result = $('#img','#avatar').text();
        console.log(result);
    }
)};


// = () => {
//     new Promise<string>((resolve, reject) => {
//         axios.get(`https://www.youtube.com/c/Bellyvely`, (err, res) => {
//             if (err) reject(err);
//             resolve(res.body);
//         });
//     });
// };