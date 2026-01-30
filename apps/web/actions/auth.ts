import { account } from "@/utils/appwrite-client";

export async function getUserAction() {
  try {
    return await account.getSession({
      sessionId: "current",
    });
  } catch (error) {
    // 401 hatasını burada yakalayıp null dönüyoruz
    return null;
  }
}

export async function logoutAction(): Promise<void> {
  await account.deleteSession({
    sessionId: "current",
  });
}
