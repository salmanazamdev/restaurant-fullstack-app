import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://192.168.100.23:3000/signup", {
        username,
        email,
        password,
      });

      Alert.alert("Success", "Account created!");
      router.push("/(auth)/basicLogin");
    } catch (error) {
      console.log("Signup error:", error);
      const message = error.response?.data?.error || "Signup failed";
      Alert.alert("Error", message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <Image
            source={require("@/assets/images/khaanalogo.png")}
            style={styles.image}
          />

          <Text style={styles.title}>Create New Account</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.greenBtn} onPress={handleSignup}>
            <Text style={styles.greenBtnText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.socialBtn}>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/facebook.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/google.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/images/apple.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.push("/(auth)/basicLogin")}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const customGreen = "#1a974e";

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 30,
  },
  innerContainer: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#000",
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 12,
    marginVertical: 8,
    width: "100%",
    color: "#000",
  },
  greenBtn: {
    backgroundColor: customGreen,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  greenBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  link: {
    color: customGreen,
    fontWeight: "bold",
  },
});
