import { Request, Response, NextFunction } from "express"
import jwt, { Secret } from "jsonwebtoken"

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('Authorization');

    req.headers.isAuthenticated = 'false';

    if (!authHeader) {
        return next();        
    }

    const token = authHeader.split(' ')[1].replace(/(,$)/g, "");

    if (!token || token === '') {
        return next();
    }

    const appSecret: Secret = process.env.APP_SECRET || '';
    let decodedToken: any = {};
    try {
        decodedToken = jwt.verify(token, appSecret)
    } catch (error) {
        return next();
    }
    
    if (!decodedToken) {
        return next();
    }

    req.headers.isAuthenticated = 'true';
    req.headers.token = token;
    return next();
}