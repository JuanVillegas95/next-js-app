import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./config/firebase";

export function middleware(request: NextRequest) {}

export const config = {
  matcher: ["/dashboard", "/"],
};
