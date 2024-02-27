
import passport from "passport";
import { Request } from "express";
import bcrypt from "bcrypt";
import UserModel, { IUser } from "../models/user";
import { error } from "console";
const localStrategy = require("passport-local").Strategy;


passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (
      req: Request,
      email: string,
      password: string,
      done: (error: any, user?: IUser | false) => void
    ) => {
      try {
        
        if(req.body.username === ""){
          const wrong = "username field is required";
          return done(wrong);
        }
        const username = req.body?.username;
        const user = await UserModel.create({ email, password, username });


        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (
      email: string,
      password: string,
      done: (
        error: any,
        user?: IUser | false,
        options?: { message?: string; error?: any }
      ) => void
    ) => {
      try {
        const user = await UserModel.findOne({ email });
        if (!user) {
          return done(null, false, { message: "User does not exist" });
        }
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
          return done(null, false, { message: "Invalid Password" });
        }
        return done(null, user, { message: "Signed in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
