import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Top Illustration */}
      <Image source={require("@/assets/images/welcome.png")} style={styles.image} />

      {/* Heading */}
      <Text style={styles.title}>Let's you in</Text>

      {/* Social Buttons */}
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialText}><Image source={require("@/assets/images/facebook.png")} style={styles.icon} /> Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialText}><Image source={require("@/assets/images/google.png")} style={styles.icon} /> Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialText}><Image source={require("@/assets/images/apple.png")} style={styles.icon} /> Continue with Apple</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Phone Login */}
      <TouchableOpacity style={styles.greenBtn}>
        <Text style={styles.greenBtnText}>Sign in with Phone Number</Text>
      </TouchableOpacity>

      {/* Bottom Link */}
      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/(auth)/signup")}>Sign up</Text>
      </Text>
    </View>
  );
}

const green = "#1a974e";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 60,
  },

    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },

  socialBtn: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: "center",
  },

    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    
  socialText: {
    fontSize: 16,
    
    color: "#000",
  },

  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: "#999",
  },

  greenBtn: {
    backgroundColor: green,
    width: "100%",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  greenBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },

  link: {
    color: green,
    fontWeight: "bold",
  },

});
