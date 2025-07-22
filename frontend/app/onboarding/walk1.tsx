import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Walk1() {
  return (
    <View style={styles.container}>
      {/* Background SVG or PNG can be added here if needed in the future */}
      
      {/* Top Image */}
      <Image
        source={require("@/assets/images/order.png")} // change to your PNG file
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Order for Food</Text>
        <Text style={styles.description}>
          Browse your favorite meals and order instantly.
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/onboarding/walk2")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const green = "#3DBE29";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // match the background
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
    color:"#1a974eff",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1a974eff",
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
