import express from 'express';
import passport from 'passport';
import  config  from '../config';
import {signup, login} from '../controller/controller'
 

const router = express.Router();


router.post('/signup', signup);

router.post('/login', login);

export default router;