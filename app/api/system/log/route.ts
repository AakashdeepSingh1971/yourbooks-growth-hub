import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
    try {
        const { message, source } = await req.json();

        const logLine = `[${new Date().toISOString()}] [${source}] ${message}\n`;

        const logPath = path.join(process.cwd(), "system.log");

        fs.appendFileSync(logPath, logLine);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}