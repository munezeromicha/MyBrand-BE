import { Request, Response, NextFunction } from 'express';

const adminAuthorize = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const { role } = req.body.user;

        if(role != 'admin'){
            throw new Error();
        }
        
        next();

    }catch(error){
        return res.status(404).send({ error});
    }
};

export default adminAuthorize;