// src/app/api/auth/change-password/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/mysql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { logAction } from "@/lib/audit";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "vG7r!9bXw2Qm#4ZkLp8$eUj6@hS0yT1fN5dR3cBq";

type UserRow = {
    password: string;
};

type JwtPayload = {
    id: number;
    role: string;
};

export async function POST(req: Request) {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("admin_token=")?.[1];
    if (!token) throw new Error("Unauthorized");

    const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET!)
    );

    // Optional: Require admin role
    if (!payload.role) throw new Error("Unauthorized");

    try {
        // Extract token from cookie safely
        const cookieHeader = req.headers.get("cookie") || "";
        const token = cookieHeader
            .split("; ")
            .find((c) => c.startsWith("admin_token="))
            ?.split("=")[1];

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

        const { currentPassword, newPassword } = (await req.json()) as {
            currentPassword: string;
            newPassword: string;
        };

        // Fetch user password from DB
        const [rows] = (await db.execute(
            "SELECT password FROM users WHERE id = ?",
            [decoded.id]
        )) as unknown as UserRow[][]; // mysql2 returns RowDataPacket[][]

        if (!rows.length) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const isValid = await bcrypt.compare(currentPassword, rows[0].password);

        if (!isValid) {
            return NextResponse.json({ error: "Wrong password" }, { status: 401 });
        }

        // Hash new password
        const hashed = await bcrypt.hash(newPassword, 10);

        // Update in DB
        await db.execute("UPDATE users SET password = ? WHERE id = ?", [
            hashed,
            decoded.id,
        ]);

        // Log action
        await logAction(decoded.id, "Password changed");

        return NextResponse.json({ message: "Password updated" });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to change password" },
            { status: 500 }
        );
    }
}
