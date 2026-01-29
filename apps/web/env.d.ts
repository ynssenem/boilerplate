declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
    readonly NEXT_PUBLIC_APPWRITE_PROJECT_ID: string;
    readonly APPWRITE_KEY: string;
  }
}
