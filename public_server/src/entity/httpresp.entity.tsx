import type { IShowroom, IClip, IClipDataJson, IScreenshot } from "../interface/showroom.interface";

export class HttpResp {
    private code: string;
    private message: string;
    private data: RespData | null = null;

    constructor (code: string = '00', message: string = 'Success') {
        this.code = code;
        this.message = message;
    }

    public setCode = (code: string): void => {
        this.code = code;
    }

    public setMessage = (message: string): void => {
        this.message = message;
    }

    public setData = (data: RespData | null): void => {
        this.data = data;
    }
}

export class RespData {
    private userId: string = '';
    private youtubeTitle: string = '';
    private fileName: string = '';

    private clips: IClip[] | null = null;
    private screenshot: IScreenshot[] | null = null;
    private data: IClipDataJson[] | null = null;
    
    constructor (userId: string, youtubeTitle: string, fileName: string) {
        this.userId = userId;
        this.youtubeTitle = youtubeTitle;
        this.fileName = fileName;
    }

    public setUserId = (userId: string): void => {
        this.userId = userId;
    }

    public setYoutubeTitle = (youtubeTitle: string): void => {
        this.youtubeTitle = youtubeTitle;
    }
    
    public getFileName = (fileName: string): void => {
        this.fileName = fileName;
    }
    
    public setClips = (clips: IClip[]): void => {
        this.clips = clips;
    }

    public setScreenshot = (screenshot: IScreenshot[]): void => {
        this.screenshot = screenshot;
    }
    
    public setData = (data: IClipDataJson[]): void => {
        this.data = data;
    }
}