import  { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Influencer } from '../types/influencer.type';

export default function usePosts(){
    const { influencerId } = useParams<{ influencerId: string }>();
    const [influencer, setInfluencer] = useState(new Influencer());

    useEffect(() => {
        (async () => {
            await axios.get(`/api/influencer/${influencerId}`)
            .then((res) => setInfluencer(() => {
                return{ ...res.data }
            }));
        })();
    }, []);

    return influencer;
}