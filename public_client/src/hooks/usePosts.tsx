import  { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Post } from '../types/post.type';

export default function usePosts(){
    const { influencerId } = useParams<{ influencerId: string }>();
    const [post, setPost] = useState<Post[]>([]);

    console.log(post)
    useEffect(() => {
        (async () => {
            const res = await axios.get(`/api/post`, { params: { influencerId: influencerId } })
            const data = res.data.map((post: any) => ({
                ...post
            }));

            setPost(post.concat(data));
        })();
    }, [ post ]);

    return post;
}