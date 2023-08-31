import getYoutubeId from "../services/youtube/getYoutubeId.service";
import getYoutubeName from "../services/youtube/getYoutubeName.service";
import getYoutubeDescription from "../services/youtube/getYoutubeDescription.service";
import getYoutubeProfileImg from "../services/youtube/getYoutubeProfileImg.services";
import getYoutubeBannerImg from "../services/youtube/getYoutubeBannerImg.services";
// import getYoutubeSnsLink from "../services/youtube/getYoutubeSnsList.services";

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