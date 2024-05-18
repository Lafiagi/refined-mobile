import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import commonStyles from "../styles/generic";
import React from "react";

const ItemCard = ({ navigator }) => {
  const [saved, setSaved] = React.useState(false);
  console.log(`Navigatoer is ${navigator}`)
  return (
    <View style={styles.card}>
      <View style={[commonStyles.spacedContainer, styles.placeContainer]}>
        <View style={[commonStyles.flexContainer, styles.location]}>
          <Ionicons
            name="location"
            size={20}
            color={commonStyles.orangeText.color}
          />
          <Text style={styles.place}>Lekki </Text>
        </View>
        <Ionicons
          name={`bookmark${saved ? "" : "-outline"}`}
          size={25}
          color={commonStyles.orangeText.color}
          onPress={() => setSaved(!saved)}
        />
      </View>
      <Image
        style={styles.itemPic}
        resizeMode="contain"
        source={require("../../../assets/images/airpod.png")}
      />
      <View style={[commonStyles.flexContainer, styles.itemNameContainer]}>
        <View>
          <Text style={styles.itemName} numberOfLines={1}>
            Oraimo 2 Airpods
          </Text>
        </View>
      </View>
      <TouchableOpacity
        mode="contained"
        style={styles.recoverBtn}
        onPress={() => navigator.navigate("Details")}
      >
        <Text style={styles.recoverBtnTxt}>Recover Now!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  card: {
    width: width / 2.2,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    elevation: 0.5,
    alignItems: "center",
    marginRight: 10,
  },
  itemPic: {
    width: 80,
    height: 80,
    marginTop: 10
  },
  placeContainer: {
    marginTop: 5,
    width: "85%",
  },
  itemName: {
    fontSize: 17,
  },
  itemNameContainer: {
    marginBottom: 10,
  },
  recoverBtn: {
    backgroundColor: "#ff6200",
    padding: 5,
    height: 30,
    borderRadius: 15,
    marginBottom: 10,
    width: "80%",
  },
  recoverBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  place: {
    fontSize: 16,
  },
  location: {
    backgroundColor: "#fff",
    padding: 2,
    elevation: 1,
    borderRadius: 10,
    minWidth: "50%",
  },
});
