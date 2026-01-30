import {
  Button,
  Card,
  Group,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "hooks/use-auth";
import { yupResolver } from "mantine-form-yup-resolver";
import { useEffect, useRef } from "react";
import * as yup from "yup";
import { account } from "@/utils/appwrite-client";
import { UpdateEmailVerification } from "./update-email-verification";

export function UpdateEmail() {
  const ref = useRef<HTMLFormElement>(null);
  const { user } = useAuth();

  const form = useForm({
    initialValues: {
      email: user?.email || "",
      password: "",
    },
    validate: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
      }),
    ),
  });

  useEffect(() => {
    if (user?.email) {
      form.setFieldValue("email", user.email);
    }
  }, [user]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      return await account.updateEmail({
        email: values.email,
        password: values.password,
      });
    },
    onSuccess: () => {
      notifications.show({
        title: "Başarılı",
        message: "Email adresiniz başarıyla güncellendi.",
        color: "green",
      });
      form.reset();
    },
    onError: (error) => {
      notifications.show({
        title: "Hata",
        message: error.message,
        color: "red",
      });
    },
  });

  const onHandleSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    await mutateAsync(values);
  };

  return (
    <Card withBorder>
      <Stack>
        <SimpleGrid
          cols={{
            sm: 2,
          }}
        >
          <Stack>
            <Text>Email Güncelle</Text>
          </Stack>
          <form ref={ref} onSubmit={form.onSubmit(onHandleSubmit)}>
            <Stack gap={"xs"}>
              <TextInput
                label="Email Adresi"
                variant="filled"
                {...form.getInputProps("email")}
                key={form.key("email")}
              />
              <PasswordInput
                label="Geçerli Şifreniz"
                variant="filled"
                {...form.getInputProps("password")}
                key={form.key("password")}
              />
            </Stack>
          </form>
        </SimpleGrid>

        <Group justify="right">
          {!user?.emailVerification && <UpdateEmailVerification />}
          <Button
            type="button"
            onClick={() => ref.current?.requestSubmit()}
            loading={isPending}
          >
            Güncelle
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
