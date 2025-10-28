import { Account, Client, Databases } from "react-native-appwrite";

// Initialize the Appwrite client
export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export const database = new Databases(client);

export const DB_ID = process.env.EXPO_PUBLIC_DB_ID;

export const HABITS_COLLECTION_ID =
  process.env.EXPO_PUBLIC_HABITS_COLLECTION_ID;

export type AppwriteRealtimeResponse = {
  events: string[];
  payload: any;
};
