import { IClip } from "../interface/showroom.interface";

class HttpResp {
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

class RespData {
    private userId: string = '';
    private youtubeTitle: string = '';
    private clips: IClip[] | null = null;;

    constructor (userId: string) {
        this.userId = userId;
    }

    public setUserId = (userId: string): void => {
        this.userId = userId;
    }

    public setTitle = (youtubeTitle: string): void => {
        this.youtubeTitle = youtubeTitle;
    }

    public setClips = (clips: IClip[]): void => {
        this.clips = clips;
    }
}