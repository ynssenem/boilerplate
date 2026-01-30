import { type NextRequest, NextResponse } from "next/server";
import { account } from "@/utils/appwrite-client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  if (!secret || !userId) {
    return Response.json({
      message: "Email verification failed",
      status: "error",
    });
  }

  await account.updateEmailVerification({
    secret,
    userId,
  });

  return NextResponse.redirect(new URL("/", req.url), 303);
}
