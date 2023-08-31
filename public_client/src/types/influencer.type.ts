import { Post } from './post.type';
import { SNS } from './sns.type';

export interface IInfluencer {  
    readonly influencerId: string;
    readonly youtubeId: string;
    
    readonly name: string;
    readonly description: string;
    readonly profileImg: string;
    readonly bannerImg: string;

    readonly posts: Post[];
    readonly snsList: SNS;

    readonly createdAt: string;
    readonly updatedAt: string;

    setInfluencerId(influencerId: string): void;
    setyoutubeId(youtubeId: string): void;
    setName(name: string): void;
    setDescription(description: string): void;
    setProfileImg(profileImg: string): void;
    setBannerImg(bannerImg: string): void;
    setPosts(posts: Post[]): void;
    setSnsList(snsList: SNS): void;
    setCreatedAt(createdAt: string): void;
    setUpdatedAt(updatedAt: string): void;

    // getInfluencerId(): string;
    // getYouTubeId(): string
    // getName(): string;
    // getDescription(): string;
    // getProfileImg(): string;
    // getBannerImg(): string;
    // getPosts(): Post[];
    // getSnsList(): SNS;
    // getCreatedAt(): string;
    // getUpdatedAt(): string;
}

export class Influencer implements IInfluencer{

    influencerId: string;
    youtubeId: string;
    name: string;
    description: string;
    profileImg: string
    bannerImg: string;
    posts: Post[];
    snsList: SNS;
    createdAt: string;
    updatedAt: string;

    constructor(){
        this.influencerId = "";
        this.youtubeId = "";
        this.name = "";
        this.description = "";
        this.profileImg = "";
        this.bannerImg = "";
        this.posts = [];
        this.snsList = new SNS(this.influencerId);
        this.createdAt = "";
        this.updatedAt = "";
    }
    
    public setInfluencerId = (influencerId: string): void => { this.influencerId = influencerId; }
    public setyoutubeId = (youtubeId: string): void => { this.youtubeId = youtubeId; }
    public setName =(name: string): void => { this.name = name; }
    public setDescription = (description: string): void => { this.description = description; }
    public setProfileImg = (profileImg: string): void => { this.profileImg = profileImg; }
    public setBannerImg = (bannerImg: string): void => { this.bannerImg = bannerImg; }
    public setPosts = (posts: Post[]): void => { 
        for(let post of posts)
            this.posts.push(post)
    }
    public setSnsList = (snsList: SNS): void => { this.snsList = snsList; }
    public setCreatedAt = (createdAt: string): void => { this.createdAt = createdAt; }
    public setUpdatedAt = (updatedAt: string): void => { this.updatedAt = updatedAt; }

    // public getInfluencerId(): string {
    //     return this.influencerId || '';
    // }
    // public getYouTubeId(): string {
    //     return this.youtubeId || '';
    // }
    // public getName(): string {
    //     return this.name || '';
    // }
    // public getDescription(): string {
    //     return this.description || '';
    // }
    // public getPosts(): object[]{
    //     let postsObject: object[] = [];

    //     for(let post of this.posts){
    //         const postElement = {
    //             id: post.getId(),
    //             title: post.getTitle(),
    //             clips: 'clipboard',
    //             createdAt: post.getCreatedAt(),
    //             updatedAt: post.getUpdatedAt()
    //         }
    //         postsObject.push(postElement);
    //     }
    //     return postsObject;
    // }
    // public getSnsList(): SNS {
        
    // }
}