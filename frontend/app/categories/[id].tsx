import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router"; 
import { IP_ADDRESS } from "@/constants/endpoint";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryRestaurants() {
  const { id } = useLocalSearchParams();
  const router = useRouter(); 
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [id]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/categories/${id}/restaurants`);
      setRestaurants(response.data);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={24} color="#010d06ff" />
        </TouchableOpacity>
        <Text style={styles.title}>List of Restaurants</Text>
      </View>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.restaurant_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.name}>{item.restaurant_name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 16,
  },
  iconBtn: {
    marginRight: 8,
    padding: 4,
  },
  icon: {
    fontSize: 22,
    color: "#1a974e",
    fontWeight: "bold",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  card: { marginBottom: 20, backgroundColor: "#f9f9f9", borderRadius: 12, padding: 12 },
  image: { width: "100%", height: 120, borderRadius: 8, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: "bold" },
  desc: { fontSize: 13, color: "#666" },
});