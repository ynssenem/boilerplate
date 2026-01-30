import { account } from "@/utils/appwrite-client";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { ID } from "appwrite";
import { yupResolver } from "mantine-form-yup-resolver";
import { useRouter } from "next/navigation";
import * as yup from "yup";

export interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  aggrement: boolean;
  notify: boolean;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .min(2)
    .max(100)
    .required("Email is required"),
  password: yup.string().min(8).max(100).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  aggrement: yup
    .boolean()
    .required()
    .oneOf([true], "You must agree to the terms and conditions"),
  notify: yup.boolean().optional(),
});

export function useRegisterPage() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: RegisterFormValues) => {
      return await account.create({
        email: values.email,
        password: values.password,
        userId: ID.unique(),
      });
    },
    onError: (error) => {
      notifications.show({
        color: "red",
        title: "Error",
        message: error.message,
      });
    },
    onSuccess: () => {
      notifications.show({
        color: "green",
        title: "Success",
        message: "Registration successful",
      });
    },
  });

  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      aggrement: false,
      notify: false,
    },
    validate: yupResolver(schema),
  });

  const handleOnRegisterSubmit = async (values: RegisterFormValues) => {
    const user = await mutateAsync(values);

    if (user) {
      router.push(`/auth?email=${encodeURIComponent(user.email)}`);
    }
  };

  return { form, handleOnRegisterSubmit, isPending };
}
