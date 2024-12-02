import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./config/firebase";

export function middleware(request: NextRequest) {
  const isAuthorized = request.cookies.get("authorizedUser")?.value;

  if (!isAuthorized) {
    const response = NextResponse.next();
    response.cookies.set("authorizedUser", "false", {
      path: "/",
      httpOnly: true,
    });
    return response;
  } else if (auth.currentUser) {
    const response = NextResponse.next();
    response.cookies.set("authorizedUser", "true", {
      path: "/",
      httpOnly: true,
    });
    return response;
  }

  if (request.nextUrl.pathname === "/dashboard" && isAuthorized !== "true") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/"],
};
