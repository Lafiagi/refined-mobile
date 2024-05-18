import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { ViewAll } from "../Home/Dashboard";
import ItemCard from "../../components/commons/item/ItemCard";
import React from "react";
import commonStyles from "../../components/commons/styles/generic";
import LinearGradient from "react-native-linear-gradient";

const Details = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <ImageBackground
        source={require("../../assets/images/gradientbg.png")} // Adjust the path to your image
        style={styles.background}
      >
        <Image
          style={styles.itemPic}
          resizeMode="contain"
          source={require("../../assets/images/airpod.png")}
        />
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={[commonStyles.bold, styles.itemName]}>Latest Items</Text>
        <Text
          style={[commonStyles.orangeText, styles.postedBy, commonStyles.bold]}
        >
          Posted by Jamee
        </Text>
      </View>

      <View style={[commonStyles.spacedContainer]}>
        <Text style={{ fontWeight: "500", fontSize: 18 }}>Color</Text>
        <Text style={[styles.colorTxt, styles.colorBtn]}>Black</Text>

        <TouchableOpacity
          mode="contained"
          style={styles.recoverBtn}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.recoverBtnTxt}>Claim Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionTitle, commonStyles.bold]}>
          Description
        </Text>
        <Text style={styles.description}>
          Found in a public bus while commuting to ikeja, lagos. please present
          evidence that proves ownership of this product. Found in a public bus
          while commuting to ikeja, lagos. please present evidence that proves
          ownership of this product.Found in a public bus while commuting to
          ikeja, lagos. please present evidence that proves ownership of this
          product.
        </Text>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
  },
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#999",
    alignSelf: "center",
    marginTop: 20,
  },

  itemName: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: "500",
  },

  background: {
    width: width,
    alignSelf: "center",
    height: height / 2.5,
    padding: 15,
    marginBottom: 40,
  },
  itemPic: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    marginTop: 50,
    elevation: 5,
  },
  detailsContainer: {
    padding: 0,
    marginBottom: 20,
  },
  postedBy: {
    fontSize: 15,
  },
  colorBtn: {
    borderWidth: 1,
    maxHeight: 30,
    borderColor: "#ff4201",
    padding: 5,
    borderRadius: 20,
    width: " 25%",
  },
  colorTxt: {
    textAlign: "center",
  },
  availableBtn: {
    borderWidth: 1,
    padding: 5,
    width: "50%",
    borderRadius: 15,
    borderColor: "green",
    backgroundColor: "green",
  },
  availableTxt: {
    color: "#fff",
    textAlign: "center",
  },
  descriptionTitle: {
    fontSize: 18,
    color: "#ff4201",
  },
  descriptionContainer: {
    marginTop: 0,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  recoverBtn: {
    backgroundColor: "#ff6200",
    padding: 7,
    borderRadius: 20,
    marginBottom: 30,
    width: "50%",
    alignSelf: "center",
    // marginTop: 40,
  },
  recoverBtnTxt: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Details;
