import express from "express";
// import User from '../Models/user.js';
// import bcrypt from "bcryptjs";
// import generateLogToken from "../utils.js";

import { signup, login } from '../controller/userController.js'

const router = express.Router();
//Create User
router.post("/signup", signup)

//Login
router.post("/login", login);




export default router;