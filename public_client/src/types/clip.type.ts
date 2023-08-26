import { IProduct } from "./product.type";

export interface IClip {
    id: string;
    clipUrl: string;
    products: IProduct[];

    postId: string;
}

export class Clip {
    private id: string;
    private clipUrl: string;
    private products: IProduct[] | null = null;

    private postId: string;

    constructor(id: string, clipUrl: string, postId: string) {
        this.id = id;
        this.clipUrl = clipUrl;
        this.postId = postId;
    }

    public setId = (id: string): void => {
        this.id = id;
    }

    public setClipUrl = (clipUrl: string): void => {
        this.clipUrl = clipUrl;
    }
    
    public setProducts = (products: IProduct[]): void => {
        this.products = products;
    }

    public setPostId = (postId: string): void => {
        this.postId = postId;
    }
}