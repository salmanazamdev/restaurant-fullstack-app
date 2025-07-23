import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Walk3() {
  return (
    <View style={styles.container}>
      
      {/* Top Image */}
      <Image
        source={require("@/assets/images/delivery.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Fast Delivery</Text>
        <Text style={styles.description}>
          Get your food delivered to you in no time.
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const customGreen = "#1a974eff"; // I picked a color relevant to the theme given the context and declared it as a constant

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 50,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: customGreen,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: customGreen,
    width: "70%",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
