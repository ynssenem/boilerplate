import { Button, Group } from "@mantine/core";
import { IconKeyFilled } from "@tabler/icons-react";
import Link from "next/link";

export function GuestHeader() {
  return (
    <Group>
      <Link href="/auth">
        <Button variant="default" leftSection={<IconKeyFilled size={16} />}>
          Giriş Yap / Kayıt Ol
        </Button>
      </Link>
    </Group>
  );
}
