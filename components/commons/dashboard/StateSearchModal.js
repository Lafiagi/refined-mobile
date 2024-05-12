import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { BottomSheet } from "react-native-btr";
import { Searchbar, IconButton } from "react-native-paper";
import axios from "../../../request/requests";

const StateSearchModal = ({
  stateVisible,
  toggleState,
  states,
  setSelectedState,
  selectedState,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStates, setFilteredStates] = useState(states);
  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(`States passed is=> ${JSON.stringify(filteredStates)}`);
  useEffect(() => {
    const filtered = states?.filter((state) =>
      state?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStates(filtered);
  }, [searchQuery, states]);

  return (
    <View style={styles.container}>
      <BottomSheet
        visible={stateVisible}
        onBackButtonPress={toggleState}
        onBackdropPress={toggleState}
      >
        <View style={styles.card}>
          <Searchbar
            placeholder="Search for a state"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBox}
          />
        </View>
        <FlatList
          data={filteredStates}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={
                selectedState?.name === item.name
                  ? [styles.playerCard, { backgroundColor: "#00afee" }]
                  : styles.playerCard
              }
              onPress={() => {
                setSelectedState(item);
                toggleState();
              }}
            >
              <Text
                style={
                  selectedState?.name === item.name
                    ? [styles.category, { color: "#fff" }]
                    : styles.category
                }
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `state-${item.name}`}
        />
      </BottomSheet>
    </View>
  );
};

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
export default StateSearchModal;
