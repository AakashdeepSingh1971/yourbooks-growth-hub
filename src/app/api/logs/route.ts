import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
    try {
        const logFilePath = path.join(process.cwd(), "logs", "contact_fallback.log");

        if (!fs.existsSync(logFilePath)) return NextResponse.json([]);

        const data = fs.readFileSync(logFilePath, "utf-8");
        const lines = data
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line) => JSON.parse(line));

        return NextResponse.json(lines);
    } catch (err: any) {
        console.error("Failed to read logs:", err);
        return NextResponse.json({ error: "Failed to read logs" }, { status: 500 });
    }
}