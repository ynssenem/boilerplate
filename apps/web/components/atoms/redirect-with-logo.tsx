import { Text } from "@mantine/core";
import Link from "next/link";

export function RedirectHomePage() {
  return (
    <Link href="/">
      <Text>Personel Otel</Text>
    </Link>
  );
}
