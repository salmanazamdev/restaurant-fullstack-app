import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/khaanalogo.png")}
          style={styles.logo}
        />
        <Text style={styles.welcome}>Welcome to Khaana Express</Text>
        <Text style={styles.subtitle}>Your favorite meals, delivered fast!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        {/* You can replace below with a FlatList of categories */}
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>🍔 Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>🍕 Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>🥗 Healthy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nearby Restaurants</Text>
        {/* Replace with dynamic restaurant cards */}
        <TouchableOpacity style={styles.restaurantCard}>
          <Text style={styles.restaurantName}>Food Fusion</Text>
          <Text style={styles.restaurantInfo}>Fast Food • 2.5 km</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.restaurantCard}>
          <Text style={styles.restaurantName}>Green Bites</Text>
          <Text style={styles.restaurantInfo}>Healthy • 1.2 km</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const customGreen = "#1a974e";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: customGreen,
    marginBottom: 12,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 16,
    width: "30%",
    alignItems: "center",
  },
  cardText: {
    color: "#000",
    fontWeight: "600",
  },
  restaurantCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  restaurantInfo: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
});
