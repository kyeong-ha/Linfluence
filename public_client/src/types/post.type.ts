import { IClip } from './clip.type';
import React, { Component } from "react";

export interface IPost {  
    id: string;
    title: string;
    clips: IClip[];

    createdAt: string;
    updatedAt: string;

    influencerId: string;
}

export class Post {
    private id: string;
    private title: string;
    private clips: IClip[] | null = null;

    private createdAt: string;
    private updatedAt: string;

    private influencerId: string;

    constructor(id: string = "", title: string = "", createdAt: string = "", updatedAt: string = "", influencerId: string = "") {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.influencerId = influencerId;
    }

    public setId = (id: string): void => { this.id = id; }
    public getId = () => { return this.id; }

    public setTitle = (title: string): void => { this.title = title; }
    public getTitle = () => { return this.title; }
    
    public setClips = (clips: IClip[]): void => { this.clips = clips; }
    public getClips = () => { return this.clips; }

    public setCreatedAt = (createdAt: string): void => { this.createdAt = createdAt; }
    public getCreatedAt = () => { return this.createdAt; }

    public setUpdatedAt = (updatedAt: string): void => { this.updatedAt = updatedAt; }
    public getUpdatedAt = () => { return this.updatedAt; }
    
    public setInfluencerId = (influencerId: string): void => { this.influencerId = influencerId; }
    public getInfluencerId = () => { return this.influencerId; }
}