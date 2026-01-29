"use client";

import {
  Anchor,
  Button,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { GoogleButton } from "../../components/atoms/google-button";
import { useLoginPage } from "./hooks/use-login-page";

export default function AuthPage() {
  const { form, onHandleLoginSubmit, isPending } = useLoginPage();

  return (
    <>
      <Stack gap={0}>
        <Title ta={"center"}>Create your account</Title>
        <Text c={"dimmed"} size="sm" ta={"center"}>
          Please fill out the form below to create your account.
        </Text>
      </Stack>

      <form onSubmit={form.onSubmit(onHandleLoginSubmit)}>
        <Stack gap={"xs"}>
          <TextInput
            label="Email"
            {...form.getInputProps("email")}
            key={form.key("email")}
          />
          <PasswordInput
            label="Password"
            {...form.getInputProps("password")}
            key={form.key("password")}
          />

          <Anchor ta={"right"} c={"dimmed"} mb={"xs"}>
            Forgot Password?
          </Anchor>

          <Button type="submit" loading={isPending}>
            Login
          </Button>
        </Stack>
      </form>

      <Divider label="OR" />

      <Stack align="center" gap={"lg"}>
        <GoogleButton />
        <Text size="sm" c={"dimmed"}>
          Have an account?{" "}
          <Link href="/auth/register">
            <Anchor component="span">Register</Anchor>
          </Link>
        </Text>
      </Stack>
    </>
  );
}
