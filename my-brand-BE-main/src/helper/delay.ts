import passport from 'passport';
import { IUser } from '../types/user';
import { ExtractJwt, VerifiedCallback, Strategy } from 'passport-jwt';

passport.use(
  new Strategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload: { user: IUser }, done: VerifiedCallback) => {
      try {
        return done(null, payload.user);
      } catch (error) {;
        done(error);
      }
    }
  )
);

export default passport