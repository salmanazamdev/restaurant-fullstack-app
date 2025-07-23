import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

export default function Signup() {
  return (
    <View style={styles.container}>

      {/* App Looggo */}
      <Image source={require("@/assets/images/khaanalogo.png")} style={styles.image} />


      <Text style={styles.title}>Create New Account</Text>


      <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#aaa" />
      <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#aaa" keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#aaa" keyboardType="visible-password" />
 

      <TouchableOpacity style={styles.greenBtn}>
        <Text style={styles.greenBtnText}>Sign Up</Text>
      </TouchableOpacity>


<View style={styles.socialBtn}>
      <TouchableOpacity>
        <Image source={require("@/assets/images/google.png")} style={styles.icon} ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("@/assets/images/google.png")} style={styles.icon} ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("@/assets/images/google.png")} style={styles.icon} ></Image>
      </TouchableOpacity>
</View>


      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/(auth)/login")}>
          Login
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

    socialBtn: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    marginTop:20,
    flexDirection:"row",
  },

    icon: {
        backgroundColor: "#f2f2f2",
        paddingHorizontal:9,
        width: 20,
        height: 20,
        marginHorizontal:35
        

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
