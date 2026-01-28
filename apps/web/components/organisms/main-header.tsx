import { Container, Group } from "@mantine/core";
import { RedirectHomePage } from "../atoms/redirect-with-logo";
import { GuestHeader } from "../molecules/guest-header";

export function MainHeader() {
  return (
    <Container size={"lg"} h={"100%"}>
      <Group justify="space-between" h={"100%"}>
        <RedirectHomePage />
        <GuestHeader />
      </Group>
    </Container>
  );
}
