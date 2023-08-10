interface IVideo {
    userId: string;
    youtubeTitle: string;
    clips: IClip[];
}

interface IClip {  
    id: string;
    clipurl: string;
    imageUrl: string;
    result: IClipResultJson;
}

interface IClipResultJson {
    id: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    /** Unit of second */
    captureTime: number; 
    youtubeUrl: string;
    productName: string;
    productUrl: string;
    // duration: string;
}

export {
    IVideo,
    IClip,
    IClipResultJson
}