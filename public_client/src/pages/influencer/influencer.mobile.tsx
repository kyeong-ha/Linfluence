import { useParams } from "react-router-dom";

interface ProfileData {
  [userId: string]: {
    name: string;
    message: string;
  };
}

// MySQL에 담아둘 DATA들임(미연동상태)
const data: ProfileData = {
  BilliRecords: {
    name: "BilliRecords",
    message: "hello",
  },
  abcd: {
    name: "alphabet",
    message: "efgh",
  },
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
          <h2>{profile.name}</h2>
          <p>{profile.message}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </div>
  );
}