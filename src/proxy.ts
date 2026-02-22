// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || 'vG7r!9bXw2Qm#4ZkLp8$eUj6@hS0yT1fN5dR3cBq';

// Public routes that anyone can access
const PUBLIC_ROUTES = ["/login", "/reset-password"];

// Paths to bypass middleware entirely (like static assets)
const STATIC_PATHS = ["/_next/", "/favicon.ico", "/images/", "/assets/", "/css/", "/js/"];

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Allow static files to pass through
    if (STATIC_PATHS.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // Allow public routes
    if (PUBLIC_ROUTES.includes(pathname)) {
        return NextResponse.next();
    }

    // Only protect /admin routes
    if (pathname.startsWith("/admin")) {
        const token = req.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        try {
            const { payload } = await jwtVerify(
                token,
                new TextEncoder().encode(JWT_SECRET)
            );

            // Optional: require admin role
            if (!payload.role) {
                return NextResponse.redirect(new URL("/login", req.url));
            }

            return NextResponse.next();
        } catch {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    // Everything else passes through
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/admin"], // only apply middleware for /admin
};