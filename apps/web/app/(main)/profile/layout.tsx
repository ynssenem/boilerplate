"use client";

import { Container, Grid, NavLink } from "@mantine/core";
import {
  IconKeyFilled,
  IconLogout,
  IconMessageChatbotFilled,
  IconShieldLockFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import type { PropsWithChildren } from "react";

export default function ProfileLayout({ children }: PropsWithChildren) {
  const iconProps = {
    size: 18,
  };

  return (
    <Container size={"lg"}>
      <Grid>
        <Grid.Col span={4}>
          <NavLink
            label="Kişisel Bilgiler"
            href="/profile"
            leftSection={<IconUserFilled {...iconProps} />}
          />
          <NavLink
            label="Çok Faktörlü Kimlik Doğrulama"
            href="/profile"
            leftSection={<IconShieldLockFilled {...iconProps} />}
          />
          <NavLink
            label="Güvenlik Ayarları"
            href="/profile"
            leftSection={<IconKeyFilled {...iconProps} />}
          />
          <NavLink
            label="Yardım ve Destek"
            href="/profile"
            leftSection={<IconMessageChatbotFilled {...iconProps} />}
          />
          <NavLink
            label="Çıkış Yap"
            c={"red"}
            href="/profile"
            leftSection={<IconLogout {...iconProps} />}
          />
        </Grid.Col>
        <Grid.Col span={"auto"}>{children}</Grid.Col>
      </Grid>
    </Container>
  );
}
