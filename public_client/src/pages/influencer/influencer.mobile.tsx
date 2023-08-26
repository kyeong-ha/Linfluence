import ProfileHeader from '@components/Headers/ProfileHeader';
import '@styles/influencer/influencer.container.scss';

import  React from 'react';
import { useParams, Link } from "react-router-dom";
import useProfileMobile from '@hooks/useProfile.mobile';


export function MobilePage(){
  const posts = useProfileMobile();
  
  return (
      <>
          <ProfileHeader />
          <div className='container'>
              <div className='post-list'>
                { posts.map(post => (
                  <div key={post.id} className='post'>
                    <div>동영상 container</div>
                    <div>{post.title}</div>
                  </div>
                )) }
              </div>
          </div>
      </>
  );
}