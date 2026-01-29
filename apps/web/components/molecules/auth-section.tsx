"use client";

import {
  Avatar,
  Button,
  Group,
  Menu,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconDeviceDesktopFilled,
  IconKeyFilled,
  IconLogout,
  IconMessageChatbotFilled,
  IconMoonFilled,
  IconShieldLockFilled,
  IconSunHighFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import type { Models } from "node-appwrite";

type Props = {
  session: Models.User;
};

export function AuthSection({ session }: Props) {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Link href={"/dashboard"}>
        <Button>Yönetim Paneli</Button>
      </Link>
      <Menu position="bottom-end" width={230}>
        <Menu.Target>
          <Avatar name={session.name} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>
            <Text size="sm" fw={"bold"}>
              {session.name}
            </Text>
            <div>{session.email}</div>
          </Menu.Label>
          <Menu.Divider />
          <Menu.Item rightSection={<IconUserFilled size={18} />}>
            Kişisel Bilgiler
          </Menu.Item>
          <Menu.Item rightSection={<IconShieldLockFilled size={18} />}>
            MFA
          </Menu.Item>
          <Menu.Item rightSection={<IconKeyFilled size={18} />}>
            Güvenlik Ayarları
          </Menu.Item>
          <Menu.Item rightSection={<IconMessageChatbotFilled size={18} />}>
            Yardım ve Destek
          </Menu.Item>
          <Menu.Item
            component={"a"}
            c={"red"}
            rightSection={<IconLogout size={18} />}
            href={"/auth/logout"}
          >
            Çıkış Yap
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Görünüm</Menu.Label>
          <Menu.Item
            rightSection={<IconDeviceDesktopFilled size={18} />}
            onClick={() => setColorScheme("auto")}
          >
            Sistem
          </Menu.Item>
          <Menu.Item
            rightSection={<IconSunHighFilled size={18} />}
            onClick={() => setColorScheme("light")}
          >
            Açık
          </Menu.Item>
          <Menu.Item
            rightSection={<IconMoonFilled size={18} />}
            onClick={() => setColorScheme("dark")}
          >
            Koyu
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
