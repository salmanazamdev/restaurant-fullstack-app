import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={require("@/assets/images/welcomebg.jpg")} style={styles.bg}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Khaana Express 👋</Text>
        <Text style={styles.subtitle}>Khaana Pohnchey Teez Raftaar 🍕</Text>
        <Button title="Next" onPress={() => router.push("/onboarding/walk1")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover" },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
    backgroundColor: "rgba(0, 0, 0, 0.4)", 
  },
  title: {
    color: "#1a974eff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 7,
    marginBottom: 20,
  },
});
