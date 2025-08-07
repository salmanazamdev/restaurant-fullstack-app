import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { IP_ADDRESS } from "@/constants/endpoint";

export default function CartScreen() {
  const { id } = useLocalSearchParams(); // removed unused `qty`, `note`
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/cart/${id}`);
      setItems(response.data.cartItems);
    } catch (error) {
      console.error("Failed to load cart items:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartbox}>

      <View style={styles.card}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text>Restaurant: {item.restaurant_name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Note: {item.note || "None"}</Text>
        <Text>Total Price: ${item.total_price}</Text>
      </View>

      <Image source={{ uri: item.item_image }} style={styles.image} />

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.cart_item_id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No items in cart.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  cartbox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 14,
  },

  card: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
});
