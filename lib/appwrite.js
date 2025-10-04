import { Account, Avatars, Client } from "react-native-appwrite";

export const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform("project.shelfie");

export const account = new Account(client);

export const avatars = new Avatars(client);
