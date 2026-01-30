"use client";

import { Stack } from "@mantine/core";
import { UpdateEmail } from "./components/update-email";
import { UpdateName } from "./components/update-name";

export default function ProfilePage() {
  return (
    <Stack>
      <UpdateName />
      <UpdateEmail />
    </Stack>
  );
}
