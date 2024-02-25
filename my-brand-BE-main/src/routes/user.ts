import { Router } from "express";
import Passport from "../helper/delay";
import * as verify from "../controllers/user.controller";
import passport from "../helper/passport";
import adminAuthorize from "../middleware/adminAuthorize";

const router = Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  verify.signup
);
router.post("/login", verify.login);
router.get(
  "/user",
  Passport.authenticate("jwt", { session: false }),
  verify.secureRoute
);

export default router;