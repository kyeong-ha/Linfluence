import ProfileHeader from '../../../components/headers/ProfileHeader';
import '../../../styles/influencer/influencer.container.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export function ProfileMobile(){
    return (
        <div>
            <ProfileHeader />
            <div className='container'>
                <div className='post-list'>
                    <div className='post'>
                        동영상 container
                        <div className='post-title'>title</div>
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