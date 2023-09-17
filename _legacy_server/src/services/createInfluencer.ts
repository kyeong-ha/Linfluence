import getYoutubeId from "./youtube/getYoutubeId.service";
import getYoutubeName from "./youtube/getYoutubeName.service";
import getYoutubeDescription from "./youtube/getYoutubeDescription.service";
import getYoutubeProfileImg from "./youtube/getYoutubeProfileImg.services";
import getYoutubeBannerImg from "./youtube/getYoutubeBannerImg.services";
// import getYoutubeSnsLink from "../services/youtube/getYoutubeSnsList.services";

/* 기능요약: 크롤링한 인플루언서의 데이터를 MySQL server에 저장함 */
/* 손봐야할 부분: 인플루언서가 없을시 에러 핸들링 -> 에러메시지로 반환(서버가 꺼지면 안됨) */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a the 'Influencer' if it doesn't exist
export default async function createInfluencer(channelId: string){
    try {
        const youtubeId = await getYoutubeId(channelId);
        const name = await getYoutubeName(youtubeId);
        const description = await getYoutubeDescription(youtubeId);
        const profileImg = await getYoutubeProfileImg(youtubeId);
        const bannerImg = await getYoutubeBannerImg(youtubeId);
        const data = {
            influencerId: channelId,
            youtubeId: youtubeId,
            name: name,
            description: description,
            profileImg: profileImg,
            bannerImg: bannerImg,
        }
        const newInfluecner = await prisma.influencer.create({ data });
        console.log(newInfluecner);
    } catch(err) { console.log(err); }
};