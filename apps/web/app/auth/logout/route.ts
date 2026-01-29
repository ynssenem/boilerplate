import { type NextRequest, NextResponse } from "next/server";
import { logoutAction } from "../../../actions/auth";
import { SESSION_COOKIE_NAME } from "../../../utils/appwrite-server";

export async function GET(req: NextRequest) {
  await logoutAction();

  const response = NextResponse.redirect(new URL("/", req.url), 303);

  response.cookies.delete(SESSION_COOKIE_NAME);

  return response;
}
