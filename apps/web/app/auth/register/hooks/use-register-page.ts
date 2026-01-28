import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
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

  const handleOnRegisterSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return { form, handleOnRegisterSubmit };
}
