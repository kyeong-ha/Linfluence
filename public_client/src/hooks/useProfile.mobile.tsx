import  React from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Post, IPost } from '../types/post.type';

export default function useProfileMobile(){
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = React.useState<IPost[]>([]);

    console.log(post);
    React.useEffect(() => {
        (async () => {
            const res = await axios.get(`/api/post`, { params: { influencerId: id } })
            const data = res.data.map((post: any) => ({
                id: post.id,
                title: post.title,
                influencerId: post.infleuncerId ? post.infleuncerId : id,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                clips: post.clips ? post.clips : undefined
            }));

            setPost(post.concat(data));
        })();
    }, []);

    return post;
}