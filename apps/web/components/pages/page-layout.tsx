"use client";

import { AppShell } from "@mantine/core";
import type { Models } from "node-appwrite";
import type { PropsWithChildren } from "react";
import { Header } from "../../components/templates/header";
import { HeaderRightSection } from "../organisms/header-right-section";

type Props = PropsWithChildren<{
  session: Models.Session;
}>;

export default function PageLayout({ session, ...props }: Props) {
  return (
    <AppShell
      header={{
        height: 60,
        offset: true,
        collapsed: false,
      }}
    >
      <AppShell.Header withBorder={false}>
        <Header rightSection={<HeaderRightSection session={session} />} />
      </AppShell.Header>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
