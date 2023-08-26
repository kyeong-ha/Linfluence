import { IPost } from './post.type';
import { ISNS } from './sns.type';

export interface IInfluencer {  
    id: string;
    name: string;
    bio: string;
    posts: IPost[];
    snsList: ISNS;

    createdAt: string;
    updatedAt: string;
}

export class Influencer {
    private id: string;
    private name: string;
    private bio: string;
    private posts: IPost[] | null = null;
    private snsList: ISNS;

    private createdAt: string;
    private updatedAt: string;

    constructor(id: string, name: string, bio: string = "", snsList: ISNS, createdAt: string, updatedAt: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.snsList = snsList;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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