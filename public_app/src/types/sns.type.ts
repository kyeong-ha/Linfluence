export interface ISNS {  
    readonly id: string;
    readonly naverBlog: string;
    readonly instagram: string;
    readonly facebook: string;

    readonly influencerId: string;

    setId(id: string): void;
    setNaverBlog(naverBlog: string): void;
    setInstagram(instagram: string): void;
    setFacebook(facebook: string): void;
    setInfluencerId(influencerId: string): void;
}

export class SNS implements ISNS{
    id: string;
    naverBlog: string;
    instagram: string;
    facebook: string;

    influencerId: string;

    constructor(influencerId: string){
        this.id = ""
        this.naverBlog = ""
        this.instagram = ""
        this.facebook = ""
        this.influencerId = influencerId
    }

    public setId = (id: string): void => { this.id = id }
    public setNaverBlog = (naverBlog: string): void => { this.naverBlog = naverBlog }
    public setInstagram = (instagram: string): void => { this.instagram = instagram }
    public setFacebook = (facebook: string): void => { this.facebook = facebook }
    public setInfluencerId = (influencerId: string): void => { this.influencerId = influencerId }

    public getId = () => { return this.id }
    public getNaverBlog = () => { return this.naverBlog }
    public getInstagram = () => { return this.instagram }
    public getFacebook = () => { return this.facebook }
}