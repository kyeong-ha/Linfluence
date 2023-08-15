import "reflect-metadata";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

//? Entity: DB table을 정의하기 전에 실행해야 하는 데코레이터
//? Entity는 클래스명에 매핑되므로, 테이블명의 지정은 option이다

// clips: {
//     '1.png': {// 캡처된 사진(mp4 or gif)
//         productImage: ['1-product.png', '2-product.png']; // 쇼핑몰 상품 사진
//         clipJson: ['1-result.json', '2-result.json']; //상품 정보(상품명, 쿠팡링크, 영상링크, 영상시작시점, 영상종료시점(option), )
// }, 
// ...


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    /** 쇼핑몰 상품사진 */
    @Column()
    imageUrl: string; 
    /** 상품 정보 (상품명, 쿠팡링크, 영상링크, 영상시작시점, 영상종료시점 등) */
    @Column()
    infoJson: string;

    @ManyToOne((type) => Clip, (clip) => clip.products)
    clip: Clip;
}
@Entity()
export class Clip extends BaseEntity { 
    /** Primary key column & auto increase */
    @PrimaryGeneratedColumn()
    id: number;
    
    /** 클립의 파일명(mp4 || gif) */
    @Column()
    fileName: string;

    /** 1:M 관계로,
     * Clip은 여러개의 Product을 가질 수 있고, Product는 1개의 Clip에 연결되어 있다
     */
    @OneToMany((type) => Product, (product) => product.clip)
    products: Product[];
}