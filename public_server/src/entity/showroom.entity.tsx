class Video {
    private userID: string;
    private youtubeTitle: string;
    private clips: Clip[];


    constructor 
}

class Clip {  
    private clipurl: string;
    private imageUrl: string;
    private result: ClipResultJson;
}

class ClipResultJson {
    private id: number;
    private startX: number;
    private startY: number;
    private endX: number;
    private endY: number;
    private duration: string;
    /** Unit of second */
    private captureTime: number; 
    private youtubeUrl: string;
    private productName: string;
    private productUrl: string;
}   