import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IP_ADDRESS } from "@/constants/endpoint";
import { Ionicons } from "@expo/vector-icons";

export default function RatingsPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [ratings, setRatings] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    fetchRatings();
  }, [id]);

  const fetchRatings = async () => {
    try {
      const res = await axios.get(`${IP_ADDRESS}/restaurants/${id}/ratings`);
      setRatings(res.data);
      if (res.data.length > 0) {
        const avgRating = (
          res.data.reduce((sum, r) => sum + r.rating, 0) / res.data.length
        ).toFixed(1);
        setAvg(avgRating);
      }
    } catch (error) {
      console.log("Error fetching ratings:", error);
    }
  };

  // Count ratings by star
  const starCounts = [0, 0, 0, 0, 0];
  ratings.forEach(r => { starCounts[r.rating - 1] += 1; });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rating & Reviews</Text>
      </View>

      {/* Average Rating and Bar */}
      <View style={styles.avgSection}>
        <Text style={styles.avgRating}>{avg}</Text>
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name="star"
              size={20}
              color={i < Math.round(avg) ? "#FFA500" : "#eee"}
            />
          ))}
        </View>
        <Text style={styles.avgCount}>({ratings.length} reviews)</Text>
        {/* Rating Bar */}
        <View style={{ marginTop: 12 }}>
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <View key={star} style={styles.barRow}>
              <Text style={styles.barLabel}>{star}</Text>
              <View style={styles.barBg}>
                <View
                  style={[
                    styles.barFill,
                    { width: `${(starCounts[star - 1] / (ratings.length || 1)) * 100}%` }
                  ]}
                />
              </View>
              <Text style={styles.barCount}>{starCounts[star - 1]}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Ratings List */}
      <FlatList
        data={ratings}
        keyExtractor={(item) => item.rating_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/16683/16683419.png" }}
                style={styles.avatar}
              />
              <Text style={styles.username}>{item.username}</Text>
              <View style={{ flexDirection: "row", marginLeft: 8 }}>
                {[...Array(item.rating)].map((_, i) => (
                  <Ionicons key={i} name="star" size={16} color="#FFA500" />
                ))}
              </View>
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
            <View style={styles.reviewFooter}>

            {/*  <Ionicons name="heart" size={16} color="#e74c3c" />
              <Text style={styles.likeCount}>938</Text> 
              
              commented this box, will intergate the functionality later
              */}

              <Text style={styles.timeAgo}>few days ago</Text>
            </View>
          </View>
        )}
        style={{ marginTop: 18 }}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerRow: { flexDirection: "row", alignItems: "center", padding: 18, paddingBottom: 0 },
  backBtn: { marginRight: 8, padding: 4 },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#222" },
  avgSection: { alignItems: "center", marginTop: 10 },
  avgRating: { fontSize: 38, fontWeight: "bold", color: "#FFA500" },
  avgCount: { fontSize: 15, color: "#888", marginBottom: 8 },
  barRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  barLabel: { fontSize: 14, color: "#222", width: 18 },
  barBg: { height: 8, backgroundColor: "#eee", borderRadius: 4, flex: 1, marginHorizontal: 8 },
  barFill: { height: 8, backgroundColor: "#1a974e", borderRadius: 4 },
  barCount: { fontSize: 13, color: "#888", width: 28, textAlign: "right" },
  reviewCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 14,
    marginHorizontal: 18,
    marginBottom: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  reviewHeader: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  avatar: { width: 32, height: 32, borderRadius: 16, marginRight: 8, backgroundColor: "#eee" },
  username: { fontSize: 15, fontWeight: "bold", color: "#222" },
  reviewText: { fontSize: 14, color: "#444", marginBottom: 8, marginTop: 2 },
  reviewFooter: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  likeCount: { fontSize: 13, color: "#e74c3c", marginLeft: 4, marginRight: 12 },
  timeAgo: { fontSize: 12, color: "#888" },
});