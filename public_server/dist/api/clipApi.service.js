"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpresp_entity_1 = require("../entity/httpresp.entity");
/** AWS S3에 GET 방식의 request을 보내 Showroom data(json)을 가져오는 함수 */
const ClipApiService = () => {
    const request = require('request');
    const S3 = (userId, youtubeTitle, fileName) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const apiUrl = `https://taewons3.s3.ap-northeast-2.amazonaws.com/${userId}/${youtubeTitle}/${fileName}`;
            request.get(apiUrl, (err, response) => {
                const httpResp = new httpresp_entity_1.HttpResp();
                const respData = new httpresp_entity_1.RespData(userId, youtubeTitle, fileName);
                if (body) {
                    console.log(response);
                    // respData.setClips(body.clips);
                    // respData.setScreenshot(body.screenshot);
                    // respData.setData(body.data);
                    httpResp.setCode('00');
                    httpResp.setMessage('Success');
                    httpResp.setData(respData);
                }
                else {
                    httpResp.setCode('99');
                    httpResp.setMessage('Failed');
                    httpResp.setData(null);
                }
                resolve(httpResp);
            });
        });
    });
    return { S3 };
};
class test {
}
exports.default = ClipApiService;
//# sourceMappingURL=clipApi.service.js.map