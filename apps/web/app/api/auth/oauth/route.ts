import { type NextRequest, NextResponse } from "next/server";
import { setAppwriteCookie } from "../../../../utils/appwrite-cookie";
import { createAdminClient } from "../../../../utils/appwrite-server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  if (!userId || !secret) {
    return Response.json({ error: "Parametreler eksik" }, { status: 400 });
  }

  const { account } = await createAdminClient();

  await account
    .createSession({
      secret,
      userId,
    })
    .then(async (res) => {
      // (await cookies()).set(SESSION_COOKIE_NAME, res.secret);
      await setAppwriteCookie(res.secret);
    });

  const response = NextResponse.redirect(new URL("/", req.url), 303);

  return response;
}
