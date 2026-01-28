"use client";

import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BackTo() {
  const { back } = useRouter();

  return (
    <Button
      onClick={back}
      variant="transparent"
      leftSection={<IconArrowLeft size={18} />}
    >
      Geri Dön
    </Button>
  );
}
