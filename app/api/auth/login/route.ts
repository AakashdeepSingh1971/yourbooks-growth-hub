import { NextResponse } from "next/server";
import { db } from "@/lib/mysql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { logAction } from "@/lib/audit";

const JWT_SECRET = process.env.JWT_SECRET || "vG7r!9bXw2Qm#4ZkLp8$eUj6@hS0yT1fN5dR3cBq";

type UserRow = {
    id: number;
    username: string;
    password: string;
    role: string;
};

export async function POST(req: Request) {
    try {
        const { username, password } = (await req.json()) as {
            username: string;
            password: string;
        };

        // Execute query
        const result = await db.execute("SELECT * FROM users WHERE username = ?", [username]);

        // mysql2 returns [rows, fields], cast rows safely
        const rows = (result[0] as unknown) as UserRow[];

        if (!rows.length) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const user = rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

        const response = NextResponse.json({ message: "Login successful" });
        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });

        await logAction(user.id, "Admin logged in");

        return response;
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}
