import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useField } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "hooks/use-auth";
import { useEffect } from "react";
import { account } from "@/utils/appwrite-client";

export function UpdateName() {
  const { user } = useAuth();

  const field = useField({
    initialValue: "",
    validate: (value) =>
      value.trim().length < 2 ? "Value is too short" : null,
  });

  useEffect(() => {
    if (user?.name) {
      field.setValue(user.name);
    }
  }, [user]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (name: string) => {
      return await account.updateName({
        name,
      });
    },
    onSuccess: () => {
      notifications.show({
        title: "Başarılı",
        message: "Adınız başarıyla güncellendi.",
        color: "green",
      });
    },
    onError: () => {
      notifications.show({
        title: "Hata",
        message: "Adınız güncellenirken bir hata oluştu.",
        color: "red",
      });
    },
  });

  const onHandleUpdateName = () => {
    field.validate();

    if (!field.error) {
      mutate(field.getValue());
    }
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
            <Text>Adı Soyadı</Text>
          </Stack>
          <TextInput
            label="Adı Soyadı"
            variant="filled"
            {...field.getInputProps()}
            key={field.key}
          />
        </SimpleGrid>

        <Group justify="right">
          <Button loading={isPending} onClick={onHandleUpdateName}>
            Güncelle
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
