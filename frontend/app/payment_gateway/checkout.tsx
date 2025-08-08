import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import { IP_ADDRESS } from "@/constants/endpoint";

const userId = 1; // Temporary until auth is implemented

export default function Checkout() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${IP_ADDRESS}/cart/${userId}`);

      const items = Array.isArray(res.data?.cartItems)
        ? res.data.cartItems
        : [];
      setCartItems(items);

      const total = items.reduce(
        (sum, item) =>
          sum + (item?.current_price || 0) * (item?.quantity || 0),
        0
      );
      setSubtotal(total);
    } catch (error) {
      console.log("Error fetching cart:", error);
      setCartItems([]);
      setSubtotal(0);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (cartItemId: number) => {
    try {
      await axios.delete(`${IP_ADDRESS}/cart/remove/${cartItemId}`);
      fetchCartItems();
    } catch (error) {
      console.log("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Address Section */}
      <TouchableOpacity
        style={styles.addressBox}
        onPress={() => router.push("/payment_gateway/address")}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.addressLabel}>Deliver to</Text>
          <Text style={styles.addressText}>
            Select your delivery address
          </Text>
        </View>
        <Text style={styles.changeText}>Change</Text>
      </TouchableOpacity>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) =>
          item?.cart_item_id ? String(item.cart_item_id) : String(index)
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {item?.item_image ? (
              <Image source={{ uri: item.item_image }} style={styles.image} />
            ) : null}
            <View style={styles.info}>
              <Text style={styles.name}>
                {item?.item_name || "Unnamed Item"}
              </Text>
              <Text style={styles.price}>${item?.current_price || 0}</Text>
              <Text>Qty: {item?.quantity || 0}</Text>
              {item?.note ? <Text>Note: {item.note}</Text> : null}
            </View>
            <TouchableOpacity
              onPress={() => removeItem(item?.cart_item_id)}
            >
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Summary & Checkout */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Subtotal: ${subtotal.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => router.push("/payment_gateway/confirm_payment")}
        >
          <Text style={styles.checkoutText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  addressBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  addressLabel: {
    fontSize: 14,
    color: "#555",
  },
  addressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  changeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  image: { width: 70, height: 70, borderRadius: 8, marginRight: 10 },
  info: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  price: { color: "#888" },
  remove: { color: "red", fontWeight: "bold" },

  summary: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  summaryText: { fontSize: 18, fontWeight: "bold" },
  checkoutBtn: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  checkoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
