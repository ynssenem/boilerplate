import { Button } from "@mantine/core";
import { OAuthProvider } from "appwrite";
import { account } from "@/utils/appwrite-client";

export function GoogleButton() {
  const onHandleClick = () => {
    account.createOAuth2Session({
      provider: OAuthProvider.Google,
      success: window.origin,
    });
  };

  return (
    <Button
      fullWidth
      leftSection={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Google</title>
          <g clipPath="url(#a)">
            <path
              d="M23.44 12.225c0-.984-.08-1.701-.253-2.445H11.959v4.438h6.59c-.133 1.102-.85 2.764-2.445 3.88l-.022.148 3.55 2.75.246.025c2.259-2.086 3.561-5.156 3.561-8.796"
              fill="#4285f4"
            />
            <path
              d="M11.959 23.918c3.229 0 5.94-1.063 7.92-2.897l-3.775-2.923c-1.01.704-2.365 1.195-4.145 1.195-3.163 0-5.847-2.086-6.804-4.969l-.14.012-3.691 2.857-.048.134c1.966 3.906 6.005 6.59 10.683 6.59"
              fill="#34a853"
            />
            <path
              d="M5.156 14.324a7.4 7.4 0 0 1-.399-2.365c0-.824.146-1.621.385-2.365l-.006-.159-3.738-2.903-.122.059A12 12 0 0 0 0 11.959c0 1.926.465 3.747 1.276 5.368z"
              fill="#fbbc05"
            />
            <path
              d="M11.959 4.624c2.245 0 3.76.97 4.624 1.78l3.375-3.295C17.885 1.183 15.188 0 11.958 0 7.282 0 3.243 2.684 1.277 6.59l3.866 3.004c.97-2.884 3.654-4.97 6.817-4.97"
              fill="#eb4335"
            />
          </g>
        </svg>
      }
      variant="default"
      color="gray"
      onClick={onHandleClick}
    >
      Google ile oturum açın
    </Button>
  );
}
