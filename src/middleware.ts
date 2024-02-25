// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_KEY } from "./utils/constant";

export default function middleware(request: NextRequest) {
    console.log('middleware');
    const cookieStore = cookies();
    const accessTokenKey = cookieStore.get(ACCESS_TOKEN_KEY);
    const path = request.nextUrl.pathname;
    console.log('accessTokenKey',accessTokenKey);

    if (accessTokenKey?.value) {
        if (path == "/signin" || path == "/signup" || path == "/") {
            return NextResponse.redirect(new URL("/main", request.url));
        }
        return NextResponse.next({
            request,
        });
    } else if (path != "/signin" && path != "/signup") {
        return NextResponse.redirect(new URL("/signin", request.url));
    }
    return NextResponse.next({
        request,
    });
}

export const config = {
    matcher: [
        "/",
        "/signin/:path*",
        "/signup/:path*",
        "/main/:path*",

    ],
};
