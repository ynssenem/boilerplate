import type { Models } from "node-appwrite";
import { AuthSection } from "../molecules/auth-section";
import { GuestSection } from "../molecules/guest-section";

type Props = {
  session?: Models.Session;
};

export function HeaderRightSection({ session }: Props) {
  if (!session) {
    return <GuestSection />;
  }

  return <AuthSection session={session} />;
}
