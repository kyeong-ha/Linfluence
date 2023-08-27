import { IPost } from './post.type';
import { ISNS, SNS } from './sns.type';

export interface IInfluencer {  
    readonly id: string;
    readonly name: string;
    readonly bio: string;
    readonly posts: IPost[];
    readonly snsList: ISNS;

    readonly createdAt: string;
    readonly updatedAt: string;

    setId(id: string): void;
    setName(name: string): void;
    setBio(bio: string): void;
    setPosts(posts: IPost[]): void;
    setSnsList(snsList: ISNS): void;
    setCreatedAt(createdAt: string): void;
    setUpdatedAt(updatedAt: string): void;

    // getId(): string;
    // getName(): string;
    // getBio(): string;
    // getPosts(): IPost[];
    // getSnsList(): ISNS;
    // getCreatedAt(): string;
    // getUpdatedAt(): string;
}

export class Influencer implements IInfluencer{

    id: string;
    name: string;
    bio: string;
    posts: IPost[];
    snsList: ISNS;

    createdAt: string;
    updatedAt: string;

    constructor(){
        this.id = "";
        this.name = "";
        this.bio = "";
        this.posts = [];
        this.snsList = new SNS(this.id);
        this.createdAt = "";
        this.updatedAt = "";
    }
    
    public setId = (id: string): void => {
        this.id = id;
    }

    public setName = (name: string): void => {
        this.name = name;
    }
    
    public setBio = (bio: string): void => {
        this.bio = bio;
    }

    public setPosts = (posts: IPost[]): void => {
        this.posts = posts;
    }

    public setSnsList = (snsList: ISNS): void => {
        this.snsList = snsList;
    }

    public setCreatedAt = (createdAt: string): void => {
        this.createdAt = createdAt;
    }

    public setUpdatedAt = (updatedAt: string): void => {
        this.updatedAt = updatedAt;
    }
}