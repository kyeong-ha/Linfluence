import  React from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Post } from '../types/post.type';

export default function usePosts(){
    const { influencerId } = useParams<{ influencerId: string }>();
    const [post, setPost] = React.useState<Post[]>([]);

    console.log(post);
    React.useEffect(() => {
        (async () => {
            const res = await axios.get(`/api/post`, { params: { influencerId: influencerId } })
            const data = res.data.map((post: any) => ({
                id: post.influencerId,
                title: post.title,
                influencerId: post.infleuncerId ? post.infleuncerId : influencerId,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                clips: post.clips ? post.clips : undefined
            }));

            setPost(post.concat(data));
        })();
    }, []);

    return post;
}