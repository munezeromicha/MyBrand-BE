import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Response, Request, NextFunction } from "express";
import User, { IUser } from "../models/user";
import passport from 'passport';

dotenv.config();

export const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: IUser, info: any) => {
    if (err) {
      return res.status(400).send({ data: [], message: "error", error: err.message });
    }
    if (!user) {
      return res.status(400).send({ data: [], message: "Your not Permitted", error: null });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export const checkAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.send("Your not Permitted");
  }

  if (!("role" in req.user)) {
    return res.send("Your not Permitted");
  }

  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(401).send("Your not Permitted");
  }
};

