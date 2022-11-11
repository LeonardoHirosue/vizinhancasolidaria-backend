import { NextFunction, Request, Response } from "express";
import { ApiError } from "@shared/errors/ApiErrors";

const errorMiddleware = (
    error: Error & Partial<ApiError>,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : "Internal Server Error";
    return response.status(statusCode).json({ message: message });
}

export { errorMiddleware }