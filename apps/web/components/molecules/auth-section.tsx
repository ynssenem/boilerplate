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
import { useAuth } from "hooks/use-auth";
import Link from "next/link";
import { authMenus } from "@/utils/auth-menu";

export function AuthSection() {
  const { logout: logoutHook, user } = useAuth();
  const { setColorScheme } = useMantineColorScheme();

  const logout = async (): Promise<void> => {
    await logoutHook();
    window.location.href = "/";
  };

  return (
    <Group>
      <Link href={"/dashboard"}>
        <Button>Yönetim Paneli</Button>
      </Link>
      <Menu position="bottom-end" width={230}>
        <Menu.Target>
          <Avatar name={"Yunus"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>
            <Text size="sm" fw={"bold"}>
              {user?.name}
            </Text>
            <div>{user?.email}</div>
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
            c={"red"}
            rightSection={<IconLogout size={18} />}
            onClick={logout}
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
