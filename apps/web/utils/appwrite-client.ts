import { Account, Client, Databases } from "appwrite";

const client = new Client()
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);

export const account = new Account(client);
export const databases = new Databases(client);
