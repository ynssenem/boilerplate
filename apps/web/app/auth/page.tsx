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

export default function AuthPage() {
  return (
    <>
      <Stack gap={0}>
        <Title ta={"center"}>Create your account</Title>
        <Text c={"dimmed"} size="sm" ta={"center"}>
          Please fill out the form below to create your account.
        </Text>
      </Stack>

      <Stack gap={"xs"}>
        <TextInput label="Email" />
        <PasswordInput label="Password" />

        <Anchor ta={"right"} c={"dimmed"} mb={"xs"}>
          Forgot Password?
        </Anchor>

        <Button>Login</Button>
      </Stack>

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
