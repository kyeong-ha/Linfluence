"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespData = exports.HttpResp = void 0;
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
class RespData {
    constructor(userId, youtubeTitle, fileName) {
        this.userId = '';
        this.youtubeTitle = '';
        this.fileName = '';
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
exports.RespData = RespData;
//# sourceMappingURL=httpresp.entity.js.map