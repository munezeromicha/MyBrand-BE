
import { Request, Response, NextFunction } from 'express';
import passport from '../helper/passport';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/user';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    Query: 'Done',
    user: req.user
  });
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'login',
    async (err: any, user: IUser | false, info: { message: string }) => {
      
      try {
        if (err || !user) {
          
          const error = new Error(info?.message || 'Error');
          return res.status(404).json(info);
        }

        req.login(
          user,
          { session: false },
          
          async (error: any) => {console.log('information');
            if (error) return next(error);

            const body = { _id: user._id, email: user.email, role: user.role };
            const token = jwt.sign({ user: body }, 'TOP_SECRET', );
            const Query = info.message;

            return res.status(200).json({ token, Query });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};

export const secureRoute = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    Query: 'Secured',
    user: req.user,
    token: req.query.secret_token
  });
};

export function register(arg0: string, arg1: any, register: any) {
    throw new Error('Not provided.');
}
