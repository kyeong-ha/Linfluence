export interface ISNS {  
    id: string;
    naverBlog: string;
    instagram: string;
    facebook: string;

    influencerId: string;
}

export class SNS {
    private id: string;
    private naverBlog: string;
    private instagram: string;
    private facebook: string;

    private influencerId: string;

    constructor(id: string, naverBlog: string = "", instagram: string = "", facebook: string = "", influencerId: string) {
        this.id = id;
        this.naverBlog = naverBlog;
        this.instagram = instagram;
        this.facebook = facebook;
        this.influencerId = influencerId;
    }

    public setId = (id: string): void => {
        this.id = id;
    }

    public setNaverBlog = (naverBlog: string): void => {
        this.naverBlog = naverBlog;
    }
    
    public setInstagram = (instagram: string): void => {
        this.instagram = instagram;
    }

    public setFacebook = (facebook: string): void => {
        this.facebook = facebook;
    }
    
    public setInfluencerId = (influencerId: string): void => {
        this.influencerId = influencerId;
    }
}