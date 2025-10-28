import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (isAuth) {
      router.replace("/(tabs)");
    } else {
      router.replace("/auth");
    }
  }, [isAuth]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
