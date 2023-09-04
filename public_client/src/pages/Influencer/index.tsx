import '@styles/influencer/Container.scss';
import '@styles/influencer/influencer.scss';

import  React from 'react';
import { useParams, Link } from "react-router-dom";
import useInfluencer from '@hooks/useInfluencer';
import usePosts from '@hooks/usePosts';
import NotFoundErrorPage from '@pages/Error/NotFoundError';

export default function InfluencerPage(){
  const influencer = useInfluencer();
  const posts = usePosts();
  
  if (influencer.influencerId !== undefined) {
    return (
        <>
          <header className='profile-header'>
                {/* <div className='vertical-segment'> */}
                  <div className='profile-banner-wrap'>
                  <Link to='/' className='back-icon'>
                    뒤로가기
                  </Link>
                  <img className='profile-banner' src={influencer.bannerImg}/>
                  </div>
                  <div className='profile-contents-wrap'>
                      <div className='profile-contents'>
                          <h2>{influencer.name}</h2>
                          <p>{influencer.description}</p>
                          <div className='profile-nav wrapper'>
                              <div className='nav-button'>
                                  <span>게시물</span>
                                  <span>스토어</span>
                              </div>
                              <div>필터</div>
                          </div>
                      </div>
                  </div>
                {/* </div> */}
              <div className='profile-img-wrap'>
                  <div className='profile-img' style={{ 
      backgroundImage: `url(${influencer.profileImg})` 
    }}>  
                  </div>
              </div>
          </header>
  
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
    )
  }else {
    return (
      <NotFoundErrorPage />
    );
  }
}