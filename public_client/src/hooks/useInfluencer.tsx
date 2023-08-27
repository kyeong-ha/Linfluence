import  React from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IInfluencer, Influencer } from '../types/influencer.type';

export default function usePosts(){
    const { id } = useParams<{ id: string }>();
    const [influencer, setInfluencer] = React.useState(new Influencer());

    React.useEffect(() => {
        (async () => {
            await axios.get(`/api/influencer/${id}`)
            .then((res) => setInfluencer((prevState) => {
                return{
                    ...prevState,
                    id: res.data.id,
                    name: res.data.name,
                    bio: res.data.bio,
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