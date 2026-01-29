"use server";

import type { PropsWithChildren } from "react";
import { getLoggedInUserAction } from "../../actions/auth";
import PageLayout from "../../components/pages/page-layout";

export default async function MainLayout(props: PropsWithChildren) {
  const session = await getLoggedInUserAction();

  return <PageLayout session={session}>{props.children}</PageLayout>;
}
