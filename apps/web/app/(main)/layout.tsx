"use client";

import { AppShell } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { MainHeader } from "../../components/organisms/main-header";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <AppShell
      header={{
        height: 60,
        offset: true,
        collapsed: false,
      }}
    >
      <AppShell.Header withBorder={false}>
        <MainHeader />
      </AppShell.Header>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
