import { Container, Group } from "@mantine/core";
import type { ReactNode } from "react";
import { RedirectHomePage } from "../atoms/redirect-with-logo";

type Props = {
  rightSection?: ReactNode;
};

export function Header(props: Props) {
  return (
    <Container size={"lg"} h={"100%"}>
      <Group justify="space-between" h={"100%"}>
        <RedirectHomePage />
        {props.rightSection}
      </Group>
    </Container>
  );
}
