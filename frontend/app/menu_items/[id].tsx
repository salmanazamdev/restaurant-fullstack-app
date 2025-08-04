import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IP_ADDRESS } from "@/constants/endpoint";

import { Ionicons } from "@expo/vector-icons";

export default function MenuItemDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  useEffect(() => {
    fetchMenuItem();
  }, [id]);

  const fetchMenuItem = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/menu-items/${id}`);
      setItem(response.data);
    } catch (error) {
      console.log("Error fetching menu item:", error);
    }
  };

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <TouchableOpacity style={styles.topLeftIcon} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightIcon}>
          <Ionicons name="heart-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>

      <View style={styles.quantityRow}>
        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Ionicons name="remove" size={22} color="#1a974e" />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{quantity}</Text>
        <TouchableOpacity
          style={styles.qtyBtn}
          onPress={() => setQuantity(quantity + 1)}
        >
          <Ionicons name="add" size={22} color="#1a974e" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.noteInput}
        placeholder="Note to Restaurant (optional)"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity
        style={styles.greenBtn}
        onPress={() => router.push(`/basket?itemId=${id}&qty=${quantity}&note=${encodeURIComponent(note)}`)}
      >
        <Text style={styles.greenBtnText}>
          Add to Basket - ${ (item.price * quantity).toFixed(2) }
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", marginTop:25 },
  imageWrapper: { position: "relative" },
  image: { width: "100%", height: 280, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  topLeftIcon: { position: "absolute", top: 30, left: 18, backgroundColor: "#0007", borderRadius: 20, padding: 4 },
  topRightIcon: { position: "absolute", top: 30, right: 18, backgroundColor: "#0007", borderRadius: 20, padding: 4 },
  infoSection: { padding: 18, paddingBottom: 0 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10, color: "#222" },
  desc: { fontSize: 15, color: "#444", marginBottom: 18 },
  quantityRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 18 },
  qtyBtn: { backgroundColor: "#f2f2f2", borderRadius: 8, padding: 8, marginHorizontal: 28 },
  qtyText: { fontSize: 20, fontWeight: "bold", color: "#222" },
  noteInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 18,
    marginBottom: 24,
    fontSize: 15,
    color: "#222",
  },
  greenBtn: {
    backgroundColor: "#1a974e",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 18,
    marginBottom: 30,
  },
  greenBtnText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});