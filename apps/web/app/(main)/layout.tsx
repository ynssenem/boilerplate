"use client";

import { AppShell } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { HeaderRightSection } from "@/components/organisms/header-right-section";
import { Header } from "../../components/templates/header";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <AppShell
      header={{
        height: 60,
        offset: true,
        collapsed: false,
      }}
    >
      <AppShell.Header withBorder={false}>
        <Header rightSection={<HeaderRightSection />} />
      </AppShell.Header>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
