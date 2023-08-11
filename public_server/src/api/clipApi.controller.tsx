import express, { Request, Response } from "express";
import { HttpResp } from "../entity/httpresp.entity";
import ClipApiService from "./clipApi.service";

const service = ClipApiService();
const ClipApiController = express.Router();

ClipApiController.get('/:userId/:youtubeTitle/:fileName', async (req: Request, res: Response) => {
    // 파일형식에 따라 분류

    // 1. .mp4 => IClip

    // 2. .png => IScreenshot

    // 3. .json => IClipDataJson
    
    const httpResp: HttpResp = await service.S3(req.params.userId, req.params.youtubeTitle, req.params.fileName);
    res.send(httpResp);
});

export default ClipApiController;