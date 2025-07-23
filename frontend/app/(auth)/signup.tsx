import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Signup() {
  return (
    <View style={styles.container}>

      {/* App Looggo */}
      <Image source={require("@/assets/images/khaanalogo.png")} style={styles.image} />


      <Text style={styles.title}>Create New Account</Text>


  {/* Phone Input */}
      <View style={styles.inputContainer}>
        <Image source={require("@/assets/images/apple.png")} style={styles.icon} />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image source={require("@/assets/images/apple.png")} style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
      </View>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Image source={require("@/assets/images/apple.png")} style={styles.icon} />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
      </View>


      <TouchableOpacity style={styles.greenBtn}>
        <Text style={styles.greenBtnText}>Sign Up</Text>
      </TouchableOpacity>


      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/(auth)/login")}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const customGreen = "#1a974e"; // Custom green color as per the design context

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    paddingTop: 80,
  },
    image: {
        width: 250,
        height: 150,
        alignSelf: "center",
        marginBottom: 5,
    },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#000",
  },

    inputContainer: {
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

  input: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 12,
    marginVertical: 8,
    color: "#000",
  },
  
  greenBtn: {
    backgroundColor: customGreen,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  greenBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    marginTop: 25,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  link: {
    color: customGreen,
    fontWeight: "bold",
  },
});