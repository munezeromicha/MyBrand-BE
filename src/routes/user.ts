import { Router } from "express";
import passport from "../helper/passport";
import * as verify from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, missing or invalid parameters
 */
router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  verify.signup
);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     description: Login with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized, invalid credentials
 */
router.post("/login", verify.login);

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get user information
 *     description: Retrieve user information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  verify.secureRoute
);

export default router;
