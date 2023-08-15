import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

// clips: {
//     '1.png': {// 캡처된 사진(mp4 or gif)
//         productImage: ['1-product.png', '2-product.png']; // 쇼핑몰 상품 사진
//         clipJson: ['1-result.json', '2-result.json']; //상품 정보(상품명, 쿠팡링크, 영상링크, 영상시작시점, 영상종료시점(option), )
// }, 
// ...

interface ClipsAttributes {
    id?: number; // not null autoincrement
    clip: string; // 클립의 파일명(mp4 || gif)
    productImage: string[]; // 쇼핑몰 상품사진
    clipJson: string[];
};

export class Clips extends Model<ClipsAttributes>{
    public readonly id!: number;
    public clip!: string;
    public productImage!: string[];
    public clipJson!: string[];

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    // public static associations: {
    // };
}

Clips.init(
    {
        clip: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        productImage: {
            type: DataTypes.ARRAY().
        }

    }
)