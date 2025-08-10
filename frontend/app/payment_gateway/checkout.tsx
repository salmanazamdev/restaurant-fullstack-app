import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { IP_ADDRESS } from "@/constants/endpoint";

const userId = 3; // Temporary until auth is implemented
const deliveryFee = 5;

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
      await axios.delete(`${IP_ADDRESS}/cart/item/${cartItemId}`);
      fetchCartItems();
    } catch (error) {
      console.log("Error removing item:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleProceedToPayment = () => {
    if (!cartItems.length) {
      Alert.alert("Cart Empty", "Please add items before proceeding.");
      return;
    }
    router.push("/payment_gateway/confirm_payment");
  };

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

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
        </View>

        <Text style={styles.sectionTitle}>Deliver to</Text>
        <TouchableOpacity
          style={styles.boxRow}
          onPress={() => router.push("/payment_gateway/address")}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.addressLabel}>Select your delivery address</Text>
          </View>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.box}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              {item?.item_image ? (
                <Image
                  source={{ uri: item.item_image }}
                  style={styles.itemImage}
                />
              ) : null}
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>
                  {item?.item_name || "Unnamed Item"}
                </Text>
                <Text style={styles.itemDetail}>
                  Quantity: {item?.quantity || 0}
                </Text>
                <Text style={styles.itemPrice}>
                  Price: ${" "}
                  {(
                    (item?.current_price || 0) * (item?.quantity || 0)
                  ).toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity onPress={() => removeItem(item?.cart_item_id)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity
          style={styles.boxRow}
          onPress={() => router.push("/payment_gateway/payment_method")}
        >
          <Text style={styles.addressLabel}>Select Payment Method</Text>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Get Discounts</Text>
        <TouchableOpacity
          style={styles.boxRow}
          onPress={() => router.push("/payment_gateway/discounts")}
        >
          <Text style={styles.addressLabel}>Apply a discount code</Text>
          <Text style={styles.changeText}>Apply</Text>
        </TouchableOpacity>

        <View style={styles.box}>
          <View style={styles.totalRow}>
            <Text>Subtotal</Text>
            <Text>$ {subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text>Delivery Fee</Text>
            <Text>$ {deliveryFee.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={{ fontWeight: "bold" }}>Total</Text>
            <Text style={{ fontWeight: "bold" }}>
              $ {(subtotal + deliveryFee).toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={handleProceedToPayment}
        >
          <Text style={styles.placeOrderText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  boxRow: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressLabel: { fontSize: 16, fontWeight: "500" },
  changeText: { color: "#4CAF50", fontWeight: "bold" },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 15 },
  itemInfo: { flex: 1, justifyContent: "center" },
  itemName: { fontWeight: "bold" },
  itemDetail: { fontSize: 12, color: "#666" },
  itemPrice: { fontWeight: "500", marginTop: 4 },
  remove: { color: "red", fontWeight: "bold", fontSize: 12 },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  placeOrderButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 35,
    marginTop: 3
  },
  placeOrderText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
