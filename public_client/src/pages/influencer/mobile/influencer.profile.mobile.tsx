import ProfileHeader from '@components/Headers/ProfileHeader';
import '@styles/influencer/influencer.container.scss';

import  React from 'react';
import { useParams, Link } from "react-router-dom";
import useProfileMobile from '@hooks/useProfile.mobile';


export function ProfileMobile(){
    const { id } = useParams<{ id: string }>();
    const posts = useProfileMobile();
    const postList = [];

    for(const post of posts){
        postList.push(post);
    }

    console.log(postList);
    return (
        <div>
            <ProfileHeader />
            <div className='container'>
                <div className='post-list'>
                    <div className='post'>
                        동영상 container
                        <div className='post-title'>dfdf</div>
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