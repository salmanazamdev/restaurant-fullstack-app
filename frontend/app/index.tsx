// app/index.tsx
import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding/welcome");
    }, 2000); // Simulates splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Foodu 🍽️</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
