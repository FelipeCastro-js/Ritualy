import { Models } from "react-native-appwrite";

export interface Habit extends Models.Document {
  title: string;
  description: string;
  frequency: string;
  user_id: string;
  streak_count: number;
  last_completed: string;
}
