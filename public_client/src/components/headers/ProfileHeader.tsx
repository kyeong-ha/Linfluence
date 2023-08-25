import  React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import '@styles/influencer/influencer.scss';

export default function ProfileHeader() {
    const { id } = useParams<{ id: string }>();
    const [influecner, setInflunecer] = React.useState({
        id: '',
        name: '',
        bio: '',
        createdAt: '',
        updatedAt: '',
    });

    async function getInfluencer() {
        await axios.get(`/api/influencer/${id}`)
        .then((res) => setInflunecer((prevState) => {
            return { 
                ...prevState,
                id: res.data.id,
                name: res.data.name,
                bio: res.data.bio,
                createdAt: res.data.createdAt,
                updatedAt: res.data.updatedAt
            }
        }));
    }

    React.useEffect(() => {
        getInfluencer();
    }, []);

    return (
        <header className='profile-header'>
            <div className='back-icon'>뒤로가기</div>
            <div className='profile-img-wrap'>
                <div className='profile-img'>  
                </div>
            </div>
            <div className='profile-contents-wrap'>
                <div className='profile-contents'>
                    <h2>{influecner.name}</h2>
                    <p>{influecner.bio}</p>
                    <div className='profile-nav wrapper'>
                        <div className='nav-button'>
                            <span>게시물</span>
                            <span>스토어</span>
                        </div>
                        <div>필터</div>
                    </div>
                </div>
            </div>
        </header>
    )
}