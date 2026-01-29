import type { Models } from "node-appwrite";
import { createSessionClient } from "../utils/appwrite-server";

export async function getLoggedInUserAction(): Promise<
  Models.User | undefined
> {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch {
    return undefined;
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
