import { useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity} from "react-native";
import axios from "axios";
import { IP_ADDRESS } from "@/constants/endpoint";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  console.log(categories)
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get(`${IP_ADDRESS}/categories`);
    setCategories(response.data);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.topBar}>
        <View style={styles.locationWrapper}>
          <Image
            source={require("@/assets/images/cook.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.deliveryLabel}>Deliver to</Text>
            <Text style={styles.locationText}>Blue Area, Islamabad</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => router.push("/cart")} 
        >
          <Ionicons name="cart-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>



      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Kya khana pasand karo gey ustad?"
          style={styles.searchInput}
        />
      </View>


      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
          {categories.slice(0, 12).map((item, index) => (
            <TouchableOpacity
              key={item.category_id}
              style={styles.categoryItem}
              onPress={() => router.push(`/categories/${item.category_id}`)}
            >
              <Image
                source={{uri:item.image_url}}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryLabel}>
                {item.category_name.length > 13
                  ? item.category_name.slice(0, 8) + "..."
                  : item.category_name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topBar: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartIcon: {
    backgroundColor: "#f2f2f2",
    padding: 8,
    borderRadius: 20,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  deliveryLabel: {
    fontSize: 12,
    color: "#888",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  categoriesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 8
    },
  categoryLabel: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
});
