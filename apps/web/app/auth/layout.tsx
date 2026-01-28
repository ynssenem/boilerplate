import { Anchor, Box, Button, Flex, Group, Stack } from "@mantine/core";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { BackTo } from "../../components/atoms/back-to";
import classes from "./auth.module.css";

export default function AuthLayout(props: PropsWithChildren) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Group justify="space-between" align="center">
          <BackTo />
          <Link href="/">
            <Button variant="light">Anasayfa</Button>
          </Link>
        </Group>
        <Flex flex={1} justify={"center"}>
          <Stack w="60%" gap={"lg"} justify="center">
            {props.children}
          </Stack>
        </Flex>
      </div>
      <div className={classes.image}>
        <Box flex={1}>Project Logo</Box>
        <Anchor
          size="sm"
          c={"white"}
          href="https://www.pexels.com/@cottonbro/"
          target="_blank"
        >
          Photo by cottonbro studio from Pexels
        </Anchor>
      </div>
    </div>
  );
}
