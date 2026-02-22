import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { db } from "../../../lib/mysql";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, mobile, message } = body;

        if (!name || !email || !mobile) {
            return NextResponse.json({ success: false });
        }

        try {
            await db.execute(
                `INSERT INTO contact_requests (name, email, mobile, message)
                 VALUES (?, ?, ?, ?)`,
                [name, email, mobile, message || null]
            );
        } catch (dbError: any) {
            console.error("DB FAILED — Writing to log file instead");

            const logsDir = path.join(process.cwd(), "logs");
            if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

            const logPath = path.join(logsDir, "contact_fallback.log");
            const logData = {
                name,
                email,
                mobile,
                message,
                created_at: new Date().toISOString(),
                error: dbError.message,
            };

            fs.appendFileSync(logPath, JSON.stringify(logData) + "\n");
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("contact API CRASH:", error);
        return NextResponse.json({ success: true });
    }
}

export async function GET(req: Request) {
    try {
        const cookie = req.headers.get("cookie");
        if (!cookie?.includes("admin_token=")) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const token = cookie
            .split(";")
            .find((c) => c.trim().startsWith("admin_token="))
            ?.split("=")[1];

        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        await jwtVerify(token, secret);

        // Try reading from DB
        try {
            const [rows] = await db.query(
                `SELECT id, name, email, mobile, message, created_at
                 FROM contact_requests
                 ORDER BY created_at DESC`
            );
            return NextResponse.json(rows);
        } catch {
            // Fallback to file logs if DB fails
            const logFilePath = path.join(process.cwd(), "logs", "contact_fallback.log");

            if (!fs.existsSync(logFilePath)) return NextResponse.json([]);

            const data = fs.readFileSync(logFilePath, "utf-8");
            const lines = data
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line) => JSON.parse(line));

            return NextResponse.json(lines);
        }
    } catch (error) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
};