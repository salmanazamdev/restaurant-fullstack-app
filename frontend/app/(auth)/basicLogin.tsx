import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import axios from "axios";

export default function LoginAfterSignup() {
  const [email, setEmail] = useState("ismail@voultrex.com");
  const [password, setPassword] = useState("ismail123");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
  

      const response = await axios.post("http://192.168.1.15:3000/login", {
        email,
        password,
      });


      if (response.status === 200) {
        alert("Login successful!");

        router.push("/(tabs)"); 
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/khaana.png")} style={styles.image} />
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />

      <TouchableOpacity style={styles.greenBtn} onPress={handleLogin}>
        <Text style={styles.greenBtnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/(auth)/signup")}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const customGreen = "#1a974e";

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
