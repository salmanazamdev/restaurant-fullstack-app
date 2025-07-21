// app/onboarding/index.tsx
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function OnboardingWelcome() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>Welcome to Foodu</Text>
      <Text style={{ fontSize: 16, marginBottom: 40 }}>Delicious food, delivered fast 🍔</Text>
      <Button title="Get Started" onPress={() => router.push("/onboarding/walk1")} />
    </View>
  );
}
