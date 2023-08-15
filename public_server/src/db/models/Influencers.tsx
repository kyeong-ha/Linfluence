import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

//   influencer: {
//       [
//           videoId: {
//               youTubeTitle = "동영상 이름";
//               clips: {
//                   {
//                       clip: '1.png';
//                       productImage: ['1-product.png', '2-product.png']; 
//                       clipJson: ['1-result.json', '2-result.json']; 
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

//? Influencer의 구성요소
interface InfluencersAttributes {
  id?: number; // not null autoincrement
  d
};

export class Users extends Model<UsersAttributes>{
  //? 조회 후 사용 되어질 요소들의 타입명시 설정이 되어 있지 않으면 조회시 또는 조회 후 데이터 타입체크에서 오류
  public readonly id!: number;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
  };
}

//? 모델 생성
Users.init(
  {
      email: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
  },
  {
      modelName: 'Users',
      tableName: 'users',
      sequelize, //? 생성한 Sequelize 객체 패싱
      freezeTableName: true,
  }
);