"use client";

import { Container, Grid, NavLink } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { authMenus } from "../../../utils/auth-menu";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const iconProps = {
    size: 18,
  };

  return (
    <Container size={"lg"}>
      <Grid>
        <Grid.Col span={2}>
          {authMenus.map(({ icon: Icon, ...menu }, index) => (
            <NavLink
              key={index.toString()}
              component={Link}
              active={pathname === menu.href}
              label={menu.label}
              href={menu.href}
              leftSection={Icon && <Icon {...iconProps} />}
            />
          ))}
        </Grid.Col>
        <Grid.Col span={"auto"}>{children}</Grid.Col>
      </Grid>
    </Container>
  );
}
