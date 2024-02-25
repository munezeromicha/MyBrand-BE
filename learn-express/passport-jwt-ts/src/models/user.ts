import { Schema, model } from 'mongoose';

interface User {
  id: string;
  username: string;
  password: string; // Hashed in practice
}

const userSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export {
    UserModel,
    User
} 