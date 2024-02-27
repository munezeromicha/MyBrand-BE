import { Router } from "express";
import passport from "../helper/passport";
import * as verify from "../controllers/user.controller";

const router = Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  verify.signup
);

router.post("/login", verify.login);
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  verify.secureRoute
);

export default router;
