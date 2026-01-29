"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { GoogleButton } from "../../../components/atoms/google-button";
import { useRegisterPage } from "./hooks/use-register-page";

export default function RegisterAuthPage() {
  const { form, handleOnRegisterSubmit, isPending } = useRegisterPage();

  return (
    <>
      <Stack gap={0}>
        <Title ta={"center"}>Create your account</Title>
        <Text c={"dimmed"} size="sm" ta={"center"}>
          Please fill out the form below to create your account.
        </Text>
      </Stack>

      <form onSubmit={form.onSubmit(handleOnRegisterSubmit as any)}>
        <Stack gap={"xs"}>
          <TextInput
            label="Email"
            withAsterisk
            {...form.getInputProps("email")}
            key={form.key("email")}
          />
          <PasswordInput
            label="Password"
            withAsterisk
            {...form.getInputProps("password")}
            key={form.key("password")}
          />
          <PasswordInput
            label="Confirm Password"
            withAsterisk
            {...form.getInputProps("confirmPassword")}
            key={form.key("confirmPassword")}
          />

          <Stack gap={5} my={"xs"}>
            <Checkbox
              radius={"sm"}
              {...form.getInputProps("aggrement", {
                type: "checkbox",
              })}
              key={form.key("aggrement")}
              label={
                <Text c={"dimmed"} size="sm">
                  I agree to{" "}
                  <Link href={"/"}>
                    <Anchor component="span">the terms and conditions</Anchor>
                  </Link>
                </Text>
              }
            />
            <Checkbox
              radius={"sm"}
              {...form.getInputProps("notify", {
                type: "checkbox",
              })}
              key={form.key("notify")}
              label={
                <Text c={"dimmed"} size="sm">
                  Kampanyalar ile ilgili bildirimler almak istiyorum.
                </Text>
              }
            />
          </Stack>

          <Button type="submit" loading={isPending}>
            Create Account
          </Button>
        </Stack>
      </form>

      <Divider label="OR" />

      <Stack align="center" gap={"lg"}>
        <GoogleButton />
        <Text size="sm" c={"dimmed"}>
          Have an account?{" "}
          <Link href="/auth">
            <Anchor component="span">Login</Anchor>
          </Link>
        </Text>
      </Stack>
    </>
  );
}
