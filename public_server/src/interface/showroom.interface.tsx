export interface IShowroom {
    userId: string;
    youtubeTitle: string;
    fileName: string;

    clips: IClip[]; // idx is identifier for the detected product
    screenshot: IScreenshot[];
    data: IClipDataJson[];
}

export interface IClip {  
    id: string;
    src: string;
}

export interface IScreenshot {
    id: string;  
    src: string;
}
export interface IClipDataJson {
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