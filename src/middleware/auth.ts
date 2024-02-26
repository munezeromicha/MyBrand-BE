import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config/config';

const authorize = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).send("Authorization token not provided");
        }
        const secret: Secret = config.SECRET || ''; 
        const decode = jwt.verify(token, secret);
        req.body.user = decode;

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).send("Invalid token");
        } else {
            return res.status(500).send("Internal server error");
        }
    }
};



export default authorize;
