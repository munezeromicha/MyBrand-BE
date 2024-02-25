import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'; 


const secret = 'Munezero2024!';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10); 
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export function signToken(payload: object): string {
  return jwt.sign(payload, secret, { expiresIn: '30m' }); 
}


export function verifyToken(token: string): object | undefined {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error('Error verifying JWT:', error);
    return undefined;
  }
}