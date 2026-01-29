import { cookies } from "next/headers";

export const APPWRITE_SESSION_COOKIE = "a_session_";
const cookiesName = [
  "console",
  "console_legacy",
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}_legacy`,
];

export async function setAppwriteCookie(value: string) {
  const store = await cookies();
  for (const name of cookiesName) {
    store.set(`${APPWRITE_SESSION_COOKIE}${name}`, value);
  }
}

export async function getAppwriteCookie() {
  const store = await cookies();
  const firstCookie = cookiesName[0];
  return store.get(`${APPWRITE_SESSION_COOKIE}${firstCookie}`);
}

export async function deleteAppwriteCookie() {
  const store = await cookies();
  for (const name of cookiesName) {
    store.delete(`${APPWRITE_SESSION_COOKIE}${name}`);
  }
}
