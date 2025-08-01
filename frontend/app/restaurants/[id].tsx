import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IP_ADDRESS } from "@/constants/endpoint";
import { Ionicons } from "@expo/vector-icons";

//icons library imported
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/restaurants/${id}`);
      setRestaurant(response.data);
    } catch (error) {
      console.log("Error fetching restaurant:", error);
    }
  };

  if (!restaurant) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        <TouchableOpacity style={styles.topLeftIcon} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightIcon}>
          <Ionicons name="heart-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>


      <View style={styles.infoSection}>
        <Text style={styles.title}>{restaurant.restaurant_name}</Text>
        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push(`/restaurants/${id}/ratings`)}
        >
          <Ionicons name="star" size={18} color="#FFA500" />
          <Text style={styles.ratingText}>
            {restaurant.avg_rating} <Text style={styles.ratingCount}>({restaurant.rating_count} reviews)</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Ionicons name="location" size={18} color="#1a974e" />
          <Text style={styles.locationText}>{restaurant.address}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="pricetag" size={18} color="#1a974e" />
          <Text style={styles.priceText}>Starting from ${restaurant.price}</Text>
        </View>
        <TouchableOpacity style={styles.row} activeOpacity={0.7}>
          <MaterialCommunityIcons name="sale" size={24} marginTop="20" color="green" />
          <Text style={styles.offerText}>Offers are available</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.menuTitle}>Konsi dish khayein gey ustad</Text>
      <FlatList
        data={restaurant.menu_items}
        keyExtractor={(item) => item.item_id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 8, paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <Image source={{ uri: item.image_url || restaurant.image_url }} style={styles.menuImage} />
            <Text style={styles.menuName}>{item.name}</Text>
            <Text style={styles.menuPrice}>${item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageWrapper: { position: "relative" },
  image: { width: "100%", height: 220, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  topLeftIcon: { position: "absolute", top: 30, left: 18, backgroundColor: "#0007", borderRadius: 20, padding: 4 },
  topRightIcon: { position: "absolute", top: 30, right: 18, backgroundColor: "#0007", borderRadius: 20, padding: 4 },
  infoSection: { padding: 18, paddingBottom: 0 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#222" },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  ratingText: { fontSize: 16, color: "#FFA500", marginLeft: 6, fontWeight: "bold" },
  ratingCount: { color: "#888", fontWeight: "normal", fontSize: 14 },
  locationText: { fontSize: 15, color: "black", marginLeft: 6 },
  priceText: { fontSize: 15, color: "black", marginLeft: 6 },
  offerText: { fontSize: 18, color: "#1a974e", marginLeft: 5, fontWeight: "bold", marginTop:"20" },
  menuTitle: { fontSize: 20, fontWeight: "bold", color: "#222", marginLeft: 18, marginTop: 18, marginBottom: 10 },
  menuCard: {
    width: 120,
    backgroundColor: "#f9f9f9",
    borderRadius: 14,
    marginRight: 14,
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  menuImage: { width: 80, height: 80, borderRadius: 10, marginBottom: 8, backgroundColor: "#eee" },
  menuName: { fontSize: 14, fontWeight: "bold", color: "#222", textAlign: "center" },
  menuPrice: { fontSize: 13, color: "#1a974e", fontWeight: "bold", marginTop: 2 },
});