import { IClip, IScreenshot, IClipDataJson } from "../interfaces/showroom.interface";
export class HttpResp {
    private code: string;
    private message: string;
    private data: Showroom | null = null;

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

    public setData = (data: Showroom | null): void => {
        this.data = data;
    }
}

export class Showroom {
    private userId: string;
    private youtubeTitle: string;
    private fileName: string;

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

export class Clip {
    private id: string = '';
    private clipUrl: string = '';

    constructor (id: string, clipUrl: string) {
        this.id = id;
        this.clipUrl = clipUrl;
    }

    public src = (clipUrl: string): string => {
        return this.clipUrl;
    }
}

export class Screenshot {
    private id: string = '';
    private screenshotUrl: string = '';

    constructor (id: string, screenshotUrl: string) {
        this.id = id;
        this.screenshotUrl = screenshotUrl;
    }

    public src = (screenshotUrl: string): string => {
        return this.screenshotUrl;
    }
}

export class Data {
    private id: string = '';
    // private startX: number = 0;
    // private startY: number = 0;
    // private endX: number = 0;
    // private endY: number = 0;
    private captureTime: number = 0;
    private youtubeUrl: string = '';
    private productName: string = '';
    private productUrl: string = '';

    constructor (data: Data) {
        this.id = data.id;
        this.captureTime = data.captureTime;
        this.youtubeUrl = data.youtubeUrl;
        this.productName = data.productName;
        this.productUrl = data.productUrl;
    }
}