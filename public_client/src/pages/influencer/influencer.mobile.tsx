import '@styles/influencer/influencer.container.scss';
import '@styles/influencer/influencer.scss';

import  React from 'react';
import { useParams, Link } from "react-router-dom";
import useInfluencer from '@hooks/useInfluencer';
import usePosts from '@hooks/usePosts';
import { NotFoundErrorPage } from '@pages/not_found.error';

export function MobilePage(){
  const influencer = useInfluencer();
  const posts = usePosts();
  
  if (influencer.id !== undefined) {
    return (
        <>
          <header className='profile-header'>
              <div className='vertical-segment'>
                <Link to='/' className='back-icon'>
                  뒤로가기
                </Link>
                <div className='profile-contents-wrap'>
                    <div className='profile-contents'>
                        <h2>{influencer.name}</h2>
                        <p>{influencer.bio}</p>
                        <div className='profile-nav wrapper'>
                            <div className='nav-button'>
                                <span>게시물</span>
                                <span>스토어</span>
                            </div>
                            <div>필터</div>
                        </div>
                    </div>
                </div>
              </div>
              <div className='profile-img-wrap'>
                  <div className='profile-img'>  
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