import { Response } from "express";

export default class ResponseHelper {
    static response({ res, code, success, message, data }: ResponseArgs): Response {
        return res.status(code).json({ success, message, data });
    }

    static error({ res, error }: ErrorArgs): Response {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: {},
        });
    }
}

interface ResponseArgs {
    res: Response;
    code: number;
    success: boolean;
    message: string;
    data: any;
}

interface ErrorArgs {
    res: Response;
    error: any;
}
