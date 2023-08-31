import  React from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IInfluencer, Influencer } from '../types/influencer.type';

export default function usePosts(){
    const { influencerId } = useParams<{ influencerId: string }>();
    const [influencer, setInfluencer] = React.useState(new Influencer());

    React.useEffect(() => {
        (async () => {
            await axios.get(`/api/influencer/${influencerId}`)
            .then((res) => setInfluencer((prevState) => {
                return{
                    ...prevState,
                    influencerId: res.data.influencerId,
                    youtubeId: res.data.youtubeId,
                    name: res.data.name,
                    description: res.data.description,
                    profileImg: res.data.profileImg,
                    bannerImg: res.data.bannerImg,

                    createdAt: res.data.createdAt,
                    updatedAt: res.data.updatedAt,

                    posts: res.data.posts ? res.data.posts : undefined,
                    snsList: res.data.snsList ? res.data.snsList : undefined
                }
            }));
        })();
    }, []);

    return influencer;
}