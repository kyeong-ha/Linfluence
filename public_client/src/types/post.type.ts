import { IClip } from './clip.type';
import React, { Component } from "react";

export interface IPost {  
    readonly postId: string;
    readonly title: string;
    readonly clips: IClip[];
    readonly thumbnailImg: string;
    readonly tags: string[];
    readonly categories: string[];
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly influencerId: string;
}

export class Post {
    postId: string;
    title: string;
    clips: IClip[];
    thumbnailImg: string;
    tags: string[];
    categories: string[];
    createdAt: string;
    updatedAt: string;
    influencerId: string;

    constructor(influencerId: string){
        this.postId = "";
        this.title = "";
        this.clips = [];
        this.thumbnailImg = "";
        this.tags = [];
        this.categories = [];
        this.createdAt = "";
        this.updatedAt = "";
        this.influencerId = influencerId;
    }
}