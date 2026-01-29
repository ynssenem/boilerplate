import { type NextRequest, NextResponse } from "next/server";
import { getLoggedInUserAction } from "./actions/auth";

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const user = await getLoggedInUserAction();

  // Auth kontrol
  if (pathname.startsWith("/auth") && pathname !== "/auth/logout" && user) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
