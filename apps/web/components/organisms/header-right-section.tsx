import { Skeleton } from "@mantine/core";
import { useAuth } from "hooks/use-auth";
import { AuthSection } from "../molecules/auth-section";
import { GuestSection } from "../molecules/guest-section";

export function HeaderRightSection() {
  const { loading, current } = useAuth();

  if (loading) {
    return <Skeleton w={"150px"} h={32} />;
  }

  if (!current) {
    return <GuestSection />;
  }

  return <AuthSection />;
}
