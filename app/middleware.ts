// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || 'vG7r!9bXw2Qm#4ZkLp8$eUj6@hS0yT1fN5dR3cBq';
const PUBLIC_ROUTES = ["/login", "/reset-password"];
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log(pathname)
    console.log("🛡️ Middleware:", pathname);

    // Allow public routes
    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(JWT_SECRET)
        );

        // Admin-only protection
        if (pathname.startsWith("/admin") && !payload.role) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/admin", "/admin/:path*"],
};