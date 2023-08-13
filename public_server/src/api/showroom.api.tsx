import { HttpResp, Showroom } from "../utils/showroom.util";
import type { IShowroom } from "../types/showroom.type";

/** AWS S3에 GET 방식의 request을 보내 Showroom data(json)을 가져오는 함수 */
const ClipApiService = () => {
    const request = require('request');

    const S3 = async (userId: string, youtubeTitle: string, fileName: string): Promise<HttpResp> => {

        return new Promise<HttpResp>((resolve, reject) => {

            const apiUrl: string = `https://taewons3.s3.ap-northeast-2.amazonaws.com/${userId}/${youtubeTitle}/${fileName}`;
            request.get(apiUrl, 
                (error: object, response: object, body: IShowroom) => {
                const httpResp: HttpResp = new HttpResp();
                const showroom: Showroom = new Showroom(userId, youtubeTitle, fileName);

                if (body) {
                    console.log(response)
                    // respData.setClips(body.clips);
                    // respData.setScreenshot(body.screenshot);
                    // respData.setData(body.data);
        
                    httpResp.setCode('00');
                    httpResp.setMessage('Success');
                    httpResp.setData(showroom);
                } else {
                    httpResp.setCode('99');
                    httpResp.setMessage('Failed');
                    httpResp.setData(null);
                }

                resolve(httpResp);
            });
        });
    }

    return { S3 }
};


export default ClipApiService;