import  { User,UserModel } from '../models/user';
import { hashPassword, comparePassword } from '../authUtils'; 

export class UserService {
  async createUser(username: string, password: string): Promise<User | null> {
    const hashedPassword = await hashPassword(password);
    const newUser = new UserModel({ username, password: hashedPassword });
    try {
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error(`Error creating user: ${error}`);
      return null;
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    return await UserModel.findOne({ username });
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    const user = await this.findByUsername(username);
    if (!user) {
      return null;
    }

    const passwordMatches = await comparePassword(password, user.password); 
    return passwordMatches ? user : null;
  }
}
