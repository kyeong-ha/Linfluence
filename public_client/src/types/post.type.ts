import { IClip } from './clip.type';
import React, { Component } from "react";

export interface IPost {  
    readonly id: string;
    readonly title: string;
    readonly clips: IClip[];

    readonly createdAt: string;
    readonly updatedAt: string;

    readonly influencerId: string;

    setId(id: string): void;
    setTitle(title: string): void;
    setClips(clips: IClip[]): void;
    setCreatedAt(createdAt: string): void;
    setUpdatedAt(updatedAt: string): void;
    setInfluencerId(influencerId: string): void;

    getId(id: string): void;
    getTitle(title: string): void;
    getClips(clips: IClip[]): void;
    getCreatedAt(createdAt: string): void;
    getUpdatedAt(updatedAt: string): void;
    getInfluencerId(influencerId: string): void;
}

export class Post {
    id: string;
    title: string;
    clips: IClip[];

    createdAt: string;
    updatedAt: string;

    influencerId: string;

    constructor(influencerId: string){
        this.id = "";
        this.title = "";
        this.clips = [];
        this.createdAt = "";
        this.updatedAt = "";
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