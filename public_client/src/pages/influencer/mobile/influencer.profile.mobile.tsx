import ProfileHeader from '@components/Headers/ProfileHeader';
import '@styles/influencer/influencer.container.scss';

import  React from 'react';
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';
import axios from "axios";


export function ProfileMobile(){
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = React.useState([{
        id: '',
        title: '',
        influencerId: '',
        createdAt: '',
        updatedAt: '',
    }]);

    async function getInfluencer() {
        try{
            const posts = await axios.get(`/api/post`, {params: { influencerId: id }})
            const data = await posts.data.map((rowData: any) => ({
                id: rowData.id,
                title: rowData.title,
                influencerId: rowData.infleuncerId,
                createdAt: rowData.createdAt,
                updatedAt: rowData.updatedAt
            }))
            setPost(data);
        } catch (err) { console.log(err); }
    }

    React.useEffect(() => {
        getInfluencer();
    }, []);
    return (
        <div>
            <ProfileHeader />
            <div className='container'>
                <div className='post-list'>
                    <div className='post'>
                        동영상 container
                        <div className='post-title'>{post[0].title}</div>
                    </div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                    <div className='post'>동영상 container</div>
                </div>
            </div>
        </div>
    );
}