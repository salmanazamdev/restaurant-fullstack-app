import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import axios from "axios";
import { IP_ADDRESS } from "@/constants/endpoint";

export default function CartScreen() {
  const { id } = useLocalSearchParams();
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
      <Image source={{ uri: item.item_image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text style={styles.text}>Restaurant: {item.restaurant_name}</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
        <Text style={styles.text}>Note: {item.note || "None"}</Text>
        <Text style={styles.text}>Total Price: ${item.total_price}</Text>
      </View>
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
        contentContainerStyle={items.length === 0 && { flex: 1, justifyContent: "center", alignItems: "center" }}
      />

      {items.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => router.push("/payment_gateway/checkout")}
        >
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cartbox: {
    flexDirection: "row",
    alignItems: "center",
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
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
  checkoutBtn: {
    backgroundColor: "green",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  checkoutText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
