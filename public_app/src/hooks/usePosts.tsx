import  { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post } from '../types/post.type';

// 인플루언서A 의 모든 Post를 리턴한다
export default function usePosts(influencerId: string): Post[]{
    const [posts, setPosts] = useState<Post[]>([]);

    async function getPosts(influencerId: string) {
        const res = await axios.get(`/api/post`, { params: { influencerId: influencerId } });
        const data = res.data.map((post: Post) => ({
            ...post,
        }));
        setPosts(data);
    }
    
    useEffect(() => {
        if(influencerId !== '') getPosts(influencerId);
    }, [ influencerId ]);

    return posts;
}