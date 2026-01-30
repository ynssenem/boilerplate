import { Button } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { account } from "@/utils/appwrite-client";

export function UpdateEmailVerification() {
  const { mutate } = useMutation({
    mutationFn: async () => {
      await account.createEmailVerification({
        url: `${window.location.origin}/callback/verify-email`,
      });
    },
  });

  return (
    <Button type="button" onClick={() => mutate()} variant="default">
      Email Adresi Doğrula
    </Button>
  );
}
