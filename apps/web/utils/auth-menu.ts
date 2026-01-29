import type { MantineColor } from "@mantine/core";
import {
  IconKeyFilled,
  IconMessageChatbotFilled,
  type IconProps,
  IconShieldLockFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import type react from "react";

type AuthMenu = {
  label: string;
  icon?: react.FC<IconProps>;
  href: string;
  c?: MantineColor;
};

export const authMenus: AuthMenu[] = [
  {
    label: "Kişisel Bilgiler",
    icon: IconUserFilled,
    href: "/profile",
  },
  {
    label: "MFA",
    icon: IconShieldLockFilled,
    href: "/profile/mfa",
  },
  {
    label: "Güvenlik Ayarları",
    icon: IconKeyFilled,
    href: "/profile/security",
  },
  {
    label: "Yardım ve Destek",
    icon: IconMessageChatbotFilled,
    href: "/profile/support",
  },
];
