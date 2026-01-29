import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { AppwriteException } from "node-appwrite";
import {
  createAdminClient,
  SESSION_COOKIE_NAME,
} from "../../../../utils/appwrite-server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const client = await createAdminClient();

    const login = await client.account.createEmailPasswordSession({
      email: data.email,
      password: data.password,
    });

    (await cookies()).set(SESSION_COOKIE_NAME, login.secret);

    return Response.json(login);
  } catch (error) {
    if (error instanceof AppwriteException) {
      return Response.json({ message: error.message }, { status: error.code });
    }

    return Response.json({ message: "fatal error" }, { status: 500 });
  }
}
