import { NextFunction, Request, Response } from "express";

export default class AuthMiddleware {
    public authenticate(req: Request, res: Response, next: NextFunction): void {
        next();
    }
}