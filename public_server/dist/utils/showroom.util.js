"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = exports.Screenshot = exports.Clip = exports.Showroom = exports.HttpResp = void 0;
class HttpResp {
    constructor(code = '00', message = 'Success') {
        this.data = null;
        this.setCode = (code) => {
            this.code = code;
        };
        this.setMessage = (message) => {
            this.message = message;
        };
        this.setData = (data) => {
            this.data = data;
        };
        this.code = code;
        this.message = message;
    }
}
exports.HttpResp = HttpResp;
class Showroom {
    constructor(userId, youtubeTitle, fileName) {
        this.clips = null;
        this.screenshot = null;
        this.data = null;
        this.setUserId = (userId) => {
            this.userId = userId;
        };
        this.setYoutubeTitle = (youtubeTitle) => {
            this.youtubeTitle = youtubeTitle;
        };
        this.getFileName = (fileName) => {
            this.fileName = fileName;
        };
        this.setClips = (clips) => {
            this.clips = clips;
        };
        this.setScreenshot = (screenshot) => {
            this.screenshot = screenshot;
        };
        this.setData = (data) => {
            this.data = data;
        };
        this.userId = userId;
        this.youtubeTitle = youtubeTitle;
        this.fileName = fileName;
    }
}
exports.Showroom = Showroom;
class Clip {
    constructor(id, clipUrl) {
        this.id = '';
        this.clipUrl = '';
        this.src = (clipUrl) => {
            return this.clipUrl;
        };
        this.id = id;
        this.clipUrl = clipUrl;
    }
}
exports.Clip = Clip;
class Screenshot {
    constructor(id, screenshotUrl) {
        this.id = '';
        this.screenshotUrl = '';
        this.src = (screenshotUrl) => {
            return this.screenshotUrl;
        };
        this.id = id;
        this.screenshotUrl = screenshotUrl;
    }
}
exports.Screenshot = Screenshot;
class Data {
    constructor(data) {
        this.id = '';
        // private startX: number = 0;
        // private startY: number = 0;
        // private endX: number = 0;
        // private endY: number = 0;
        this.captureTime = 0;
        this.youtubeUrl = '';
        this.productName = '';
        this.productUrl = '';
        this.id = data.id;
        this.captureTime = data.captureTime;
        this.youtubeUrl = data.youtubeUrl;
        this.productName = data.productName;
        this.productUrl = data.productUrl;
    }
}
exports.Data = Data;
//# sourceMappingURL=showroom.util.js.map