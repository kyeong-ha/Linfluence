import  { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import useInfluencer from '@hooks/useInfluencer';
import usePosts from '@hooks/usePosts';
import BackButton from '@components/Button/BackButton';
import Text from '@components/common/Text';
import Profile from '@components/Profile/Profile';
import ProfileBanner from '@components/Profile/ProfileBanner';
import ProfileImg from '@components/Profile/ProfileImg';
import ProfileNav from '@components/Profile/ProfileNav';
import NotFoundErrorPage from '@pages/Error/NotFoundError';
import VideoThumbnail from '@components/Thumbnail/VideoThumbnail';
import ReadMoreButton from '@components/Button/ReadMoreButton';

export default function InfluencerPage(){
  const influencer = useInfluencer();
  const posts = usePosts(influencer.influencerId);
  const [readMore, setReadMore] = useState(false);

  /* 인플루언서 ID가 있는 경우 */
  if (influencer.influencerId !== undefined) {
    return (
        <>
          <Profile>
            <BackButton/>

            <ProfileImg src={influencer.profileImg}></ProfileImg>
            <Text id='channel-name' size='1.5rem' value={influencer.name} weight='600'/>
            <Text value={ readMore ? influencer.description : `${influencer.description.substring(0, influencer.description.indexOf('\n'))}`} />

            <button id="readmore" onClick={() => setReadMore(!readMore)}>
              {readMore ? <ReadMoreButton $top/> : <ReadMoreButton $bottom/> }
            </button>
              
            <ProfileBanner src={influencer.bannerImg}/>

            <ProfileNav/>
          </Profile>

            <div id='container'>
                <div id='post-list'>
                  { posts.map(post => (
                    <a key={post.postId} id='post'>
                      <VideoThumbnail src={post.thumbnailImg} title={post.title}></VideoThumbnail>
                    </a>
                  )) }
                </div>
            </div>
        </>
    )
  }
  /* 인플루언서 ID가 없는 경우 */
  else {
    return (
      <NotFoundErrorPage />
    );
  }
}