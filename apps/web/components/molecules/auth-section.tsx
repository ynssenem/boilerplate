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
  IconLogout,
  IconMoonFilled,
  IconSunHighFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import type { Models } from "node-appwrite";
import { authMenus } from "../../utils/auth-menu";

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
          {authMenus.map(({ icon: Icon, label, ...menu }, index) => (
            <Menu.Item
              key={index.toString()}
              rightSection={Icon && <Icon size={18} />}
              component={Link}
              variant="filled"
              href={menu.href}
              c={menu.c}
            >
              {label}
            </Menu.Item>
          ))}
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
