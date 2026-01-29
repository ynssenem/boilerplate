import { Avatar, Group, Menu } from "@mantine/core";
import { useRouter } from "next/navigation";
import type { Models } from "node-appwrite";

type Props = {
  session: Models.Session;
};

export function AuthSection({ session }: Props) {
  const router = useRouter();

  return (
    <Group>
      <Menu>
        <Menu.Target>
          <Avatar name={session.$id} size={"sm"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={"a"} href={"/auth/logout"}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
