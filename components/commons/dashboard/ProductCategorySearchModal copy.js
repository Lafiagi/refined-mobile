import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Searchbar } from "react-native-paper";
import axios from "../../../request/requests";

export default function ProductCategorySearchModal({
  visible,
  toggle,
  categories,
  setSelectedCategory,
  selectedCategory,
  setServicesList,
  setLoading,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    const filtered = categories?.filter((category) =>
      category?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchQuery, categories]);

  return (
    <View style={styles.container}>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
          <Searchbar
            placeholder="Search for service category"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBox}
          />
        </View>

        <FlatList
          data={filteredCategories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                selectedCategory?.name === item.name
                  ? [styles.playerCard, { backgroundColor: "#00afee" }]
                  : styles.playerCard
              }
              onPress={() => {
                setSelectedCategory(item);
                toggle();
              }}
            >
              <Text
                style={
                  selectedCategory?.name === item.name
                    ? [styles.category, { color: "#fff" }]
                    : styles.category
                }
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `category-${item.name}`}
        />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  centerJustified: { justifyContent: "center" },
  searchBox: {
    marginTop: 20,
    width: "92%",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  category: {
    fontSize: 17,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  playerList: {
    marginTop: 15,
  },
  playerCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 5,
    elevation: 1,
    padding: 10,
    borderRadius: 20,
  },
  playerCardDisabled: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginTop: 5,
    elevation: 1,
    padding: 5,
    borderRadius: 5,
  },
  addPlayerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,
    padding: 16,
  },
  card: {
    backgroundColor: "#ddd",
    // height: 250,
    padding: 15,
    justifyContent: "flex-start", // Align content at the top
  },
  selectedImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 50,
  },
});
