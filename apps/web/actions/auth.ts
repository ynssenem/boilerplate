import { cookies } from "next/headers";
import type { Models } from "node-appwrite";
import {
  createSessionClient,
  SESSION_COOKIE_NAME,
} from "../utils/appwrite-server";

export async function getLoggedInUserAction(): Promise<Models.User | null> {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch {
    return null;
  }
}

export async function logoutAction(): Promise<boolean> {
  try {
    const { account } = await createSessionClient();
    await account.deleteSession({
      sessionId: "current",
    });

    return true;
  } catch {
    return false;
  }
}
