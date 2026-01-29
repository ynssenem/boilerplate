import { Button } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { OAuthProvider } from "appwrite";
import { account } from "../../utils/appwrite-client";

export function GoogleButton() {
  const onHandleClick = () => {
    account.createOAuth2Token({
      provider: OAuthProvider.Google,
      success: "http://localhost:3000/api/auth/oauth",
    });
  };

  return (
    <Button
      leftSection={<IconBrandGoogleFilled size={18} />}
      variant="default"
      color="gray"
      onClick={onHandleClick}
    >
      Google ile giriş yap
    </Button>
  );
}
