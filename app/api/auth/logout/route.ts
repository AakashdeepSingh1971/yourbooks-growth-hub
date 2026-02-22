import { logAction } from '@/lib/audit';
import { NextResponse } from 'next/server';

export async function POST() {
    await logAction(null, 'Admin logged out');

    const res = NextResponse.json({ message: 'Logged out' });
    res.cookies.set({
        name: "admin_token",
        value: "",
        path: "/",
        maxAge: 0, // expire immediately
    });
    return res;
}
