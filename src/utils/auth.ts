import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}

export function generateToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
}

export function verifyToken(token: string): object | null {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch {
        return null;
    }
}