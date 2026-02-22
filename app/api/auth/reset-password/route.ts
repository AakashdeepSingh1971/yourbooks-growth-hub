import { NextResponse } from 'next/server';
import { db } from '@/lib/mysql';
import bcrypt from 'bcryptjs';
import { logAction } from '@/lib/audit';
import { jwtVerify } from 'jose';

export async function POST(req: Request) {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("admin_token=")?.[1];
    if (!token) throw new Error("Unauthorized");

    const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET || "vG7r!9bXw2Qm#4ZkLp8$eUj6@hS0yT1fN5dR3cBq")
    );

    // Optional: Require admin role
    if (!payload.role) throw new Error("Unauthorized");

    try {
        const { username, newPassword } = await req.json();

        if (!username || !newPassword) {
            return NextResponse.json(
                { error: 'Missing fields' },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await db.execute(
            `UPDATE users SET password = ? WHERE username = ?`,
            [hashedPassword, username]
        );
        await logAction(null, `Password reset for ${username}`);

        return NextResponse.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to reset password' },
            { status: 500 }
        );
    }
}
