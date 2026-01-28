import {
  Button,
  type ButtonProps,
  type PolymorphicComponentProps,
} from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

type Props = PolymorphicComponentProps<"button", ButtonProps>;

export function GoogleButton(props: Props) {
  return (
    <Button
      leftSection={<IconBrandGoogleFilled size={18} />}
      variant="default"
      color="gray"
      {...props}
    >
      Continue with Google
    </Button>
  );
}
