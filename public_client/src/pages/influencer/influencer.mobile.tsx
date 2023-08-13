import { useParams } from "react-router-dom";

//직원id/영상고유id/gif(n)/상품정보(n)
// employee:{





//   influencer: {
//       [
//           videoId: {
//               youTubeTitle = "동영상 이름";
//               clips: {
//                   '1.png': {// 캡처된 사진(mp4 or gif)
//                       productImage: ['1-product.png', '2-product.png']; // 쇼핑몰 상품 사진
//                       clipJson: ['1-result.json', '2-result.json']; //상품 정보(상품명, 쿠팡링크, 영상링크, 영상시작시점, 영상종료시점(option), )
//                   },

//                   {
//                       clip: '2.png';
//                       productImage: ['1-product.png', '2-product.png']; 
//                       clipJson: ['1-result.json', '2-result.json']; 
//                   },
//                   ...
//               }
//           }
//       ],
//       ...
      
//       snsLink: {
//           blog = "blog";
//           instagram = "insta";
//           ...
//       }
//   }
// }

interface ProfileData {    
  [userId: string]: {
    [youtubeTitle: string]: {
        clip: string[]; // id is identifier for the detected product
        screenshot: string[];
        clipJson: IClipDataJson[];
    }
  }
}

export interface IClipDataJson {
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
const data: ProfileData = {
  BilliRecords: {
      "누워서 듣기좋은 편안하고 산뜻한 R&B 1시간 | Lazy": {
        clip: ['https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/1.png', 'https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/2.png'],
        screenshot: ['https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/1-frame.png', 'https://taewons3.s3.ap-northeast-2.amazonaws.com/taewon/hyungang/2-fream.png'],
        clipJson:
        [
          { id: '1',
            startX: 0,
            startY: 1,
            endX: 1,
            endY: 1,
            captureTime: 60,
            youtubeUrl: 'https://www.youtube.com',
            productName: 'Billi 티셔츠',
            productUrl: 'https://www.coupang.com'}
        ]
      }
  }
};

export default function InfluencerMobile(){
  const { userId } = useParams<{ userId: string }>();
  let profile = null;
  if (typeof userId !== "undefined") {
    profile = data[userId];
  }

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{userId}</h2>
          <p>짤url: {profile["누워서 듣기좋은 편안하고 산뜻한 R&B 1시간 | Lazy"].clip[0]}</p>
          <p>전체캡쳐url: {profile["누워서 듣기좋은 편안하고 산뜻한 R&B 1시간 | Lazy"].screenshot[0]}</p>
        </div>
      ) : (
        // 404 에러 페이지 렌딩
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
}