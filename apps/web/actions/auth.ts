import type { Models } from "node-appwrite";
import { createSessionClient } from "../utils/appwrite";

export async function getLoggedInUserAction(): Promise<Models.User | null> {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch {
    return null;
  }
}

export async function registerUserAction({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Models.User | null> {
  try {
    const { account } = await createSessionClient();
    return await account.create({
      userId: "[USER_ID]",
      email,
      password,
    });
  } catch {
    return null;
  }
}
