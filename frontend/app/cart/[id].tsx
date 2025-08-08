import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import axios from "axios";
import { IP_ADDRESS } from "@/constants/endpoint";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
  const { id } = useLocalSearchParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/cart/${id}`);
      setItems(response.data.cartItems || []);
    } catch (error) {
      console.error("Failed to load cart items:", error);
    }
  };

  const clearCart = async () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, Clear",
          style: "destructive",
          onPress: async () => {
            try {
              await axios.delete(`${IP_ADDRESS}/cart/${id}`);
              setItems([]);
            } catch (error) {
              console.error("Failed to clear cart:", error);
            }
          },
        },
      ]
    );
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

      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={24} color="#010d06ff" />
        </TouchableOpacity>

        <Text style={styles.heading}>Your Cart</Text>

        {items.length > 0 && (
          <TouchableOpacity onPress={clearCart} style={styles.clearBtn}>
            <Ionicons name="trash" size={22} color="white" />
          </TouchableOpacity>
        )}
      </View>

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
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 12,
    justifyContent: "space-between",
  },
  iconBtn: { padding: 4 },
  heading: { fontSize: 22, fontWeight: "bold" },
  clearBtn: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 8,
  },

  cartbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  image: { width: 90, height: 110, borderRadius: 8, marginRight: 14 },
  card: { flex: 1 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 4 },
  text: { fontSize: 14, marginBottom: 2 },

  checkoutBtn: {
    backgroundColor: "green",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
  },
  checkoutText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "bold" },
});
