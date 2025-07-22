// app/onboarding/welcome.tsx
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function OnboardingWelcome() {
  return (
    <ImageBackground
      source={require("../../assets/images/welcomebg.jpg")} // Make sure you place your background image here
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to Khaana Express</Text>
          <Text style={styles.subtitle}>Khaana pohnchey full speed sey 🚀</Text>
          <Button title="Get Started" onPress={() => router.push("/onboarding/walk1")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end", // Push content to bottom
    alignItems: "center",
    paddingBottom: 100, // Adjust this to move the text up/down
    backgroundColor: "rgba(0,0,0,0.3)", // Optional: dark overlay
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
  },
});
