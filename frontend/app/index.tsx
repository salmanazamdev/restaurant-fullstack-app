import { View, Text, Dimensions } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import LottieView from "lottie-react-native";

const { height } = Dimensions.get("window");

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/onboarding/welcome");
    }, 2500);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "600", color: "#000000" }}>🍽️ Khaana Express</Text>

      <LottieView
        source={require("@/assets/lottie/loader.json")}
        autoPlay
        loop
        style={{
          position: "absolute",
          bottom: height * 0.09,
          width: 90,
          height: 90,
        }}
      />
    </View>
  );
}
