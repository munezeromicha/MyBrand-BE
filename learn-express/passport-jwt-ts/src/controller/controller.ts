import {Request, Response } from 'express';
// import userPost from '../src/models/user';
import { signToken } from '../authUtils';
import { UserService } from '../services/userService';

const userService = new UserService();
const signup = async(req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
      const user = await userService.createUser(username, password);
      if (!user) {
        return res.status(400).json({ error: 'User creation failed' });
      }
      const token = signToken({ username: user.username });
      // ... (send response with token, etc.)
    } catch (error) {
      console.error(`Error during signup: ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
}

const login = async(req: Request, res: Response) =>{
  const { username, password } = req.body;
  try {
    const user = await userService.authenticate(username, password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = signToken({ username: user.username });
  } catch(error){
    console.log(error);
  }
}


export{
    signup,
    login
}