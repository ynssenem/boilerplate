import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "mantine-form-yup-resolver";
import { redirect, useSearchParams } from "next/navigation";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export function useLoginPage() {
  const searchParams = useSearchParams();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: any) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data;
    },
    onError: (error) => {
      notifications.show({
        title: "Login Failed",
        message: error.message,
        color: "red",
      });
    },
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: searchParams.get("email") || "",
      password: "",
    },
    validate: yupResolver(schema),
  });

  const onHandleLoginSubmit = async (values: Record<string, string>) => {
    const login = await mutateAsync(values);

    if (login) {
      redirect("/");
    }
  };

  return { form, onHandleLoginSubmit, isPending };
}
