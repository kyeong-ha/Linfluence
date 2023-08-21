import { useParams } from "react-router-dom";

import { ProfileMobile } from "./mobile/influencer.profile.mobile";

interface Influencer {
  name: string;
  youtubeVideos: {
    clips: {
      clipName: string;
      clipUrl: string;
      products: {
        imageUrl: string;
        infoJson: string;
      }
    }
  };
  snsLinks: {
    naverBlog: string;
    instagram: string;
    facebook: string;
  };
  InfoJson: {
    id: string
    startX: number
    startY: number
    endX: number
    endY: number
    captureTime: number
    youtubeUrl: string
    productName: string
    productUrl: string
  }
}

export interface InfoJson {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  captureTime: number; 
  youtubeUrl: string;
  productName: string;
  productUrl: string;
}

// MySQL에 담아둘 DATA들임
const data: Influencer = {
  name: "BilliRecords",
  youtubeVideos: {
    clips: {
      clipName: "누워서 듣기 좋은 편안하고 산뜻한 R&B 1시간 | Lazy",
      clipUrl: "https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/1-frame.png",
      products: {
        imageUrl: "https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/1.png",
        infoJson: "https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/1-result.json"
      }
    }
  },
  snsLinks: {
    naverBlog: "blog.naver.com",
    instagram: "instagram.com",
    facebook: "facebook.com"
  },
  
  InfoJson: {
    id: '1',
      startX: 0,
      startY: 1,
      endX: 1,
      endY: 1,
      captureTime: 60,
      youtubeUrl: 'https://www.youtube.com',
      productName: 'Billi 티셔츠',
      productUrl: 'https://www.coupang.com'
    }
}

export default function InfluencerMobile(){
  const { name } = useParams<{ name: string }>();
  if(typeof(name) != 'undefined')
    return ProfileMobile();
  // if (data.name == name) {
  //   let profile = data;
  //   return ProfileMobile(name);
  // }else {
  //   return ( 
      
  //     <div>
  //       <h1>User Profile</h1>
  //       <p>존재하지 않는 프로필 입니다.</p>
  //     </div>
  //   );
  // }
}