import "reflect-metadata";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Clip, Product } from './Clips';

// influencer: {
//       [
//           videoId: {
//               youTubeTitle = "동영상 이름";
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
//
//       snsLink: {
//           blog = "blog";
//           instagram = "insta";
//           ...
//       }
//   }
// }
@Entity()
export class Influencer extends BaseEntity { 
    @PrimaryGeneratedColumn('uuid')
    name: string;

    @OneToMany((type) => YoutubeVideo, (youtubeVideo) => youtubeVideo.influencer)
    youtubeVideos: YoutubeVideo[];

    @OneToMany((type) => SnsLinks, (sns) => sns.influencer)
    snsLinks: SnsLinks[];
}

@Entity()
export class YoutubeVideo {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => Clip, (clip) => clip.youtubeVideo)
    clips: Clip[];

    @ManyToOne((type) => Influencer, (influencer) => influencer.youtubeVideos)
    influencer: Influencer;
}

@Entity()
export class SnsLinks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    naverBlog: string; 

    @Column()
    instagram: string;

    @Column()
    facebook: string;

    @ManyToOne((type) => Influencer, (influencer) => influencer.snsLinks)
    influencer: Influencer;
}