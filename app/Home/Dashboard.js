import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../../components/commons/styles/generic";
import { IconButton, Searchbar, Button, Surface } from "react-native-paper";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "../../components/commons/item/ItemCard";

export const ViewAll = ({ title, onPress }) => {
  return (
    <View style={[commonStyles.spacedContainer, styles.topMissingItems]}>
      <Text style={[commonStyles.bold, styles.title]}>{title}</Text>
      <View style={commonStyles.spacedContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[commonStyles.centerFlexContainer, styles.viewAllContainer]}
        >
          <Text style={[commonStyles.orangeText, styles.viewAll]}>
            View All
          </Text>
          <Ionicons
            name="caret-forward-sharp"
            size={20}
            color={commonStyles.orangeText.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Dashboard = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[commonStyles.spacedContainer, styles.profilePicContainer]}
        >
          <IconButton
            icon={"bell-outline"}
            iconColor={"#ff4201"}
            containerColor="#eee"
            size={30}
            onPress={() => navigation.navigate("Notifications")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.profilePic}
              resizeMode="contain"
              source={require("../../assets/images/profile.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[commonStyles.boldOrangeText, styles.welcomeText]}>
            Welcome Jamee
          </Text>
          <Text style={styles.info}>
            Upload missing items, recover missing items
          </Text>
        </View>
        <View style={[commonStyles.spacedContainer, styles.searchContainer]}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={commonStyles.searchBar}
            cursorColor={"#ff6200"}
            iconColor="#ff4201"
            inputStyle={{
              minHeight: 0,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Filter");
            }}
            mode="contained"
            style={[styles.filterBtn, commonStyles.centerFlexContainer]}
          >
            <MaterialCommunityIcons
              name="filter-variant"
              size={20}
              color={"#fff"}
            />
            <Text style={[commonStyles.bold, styles.filterText]}>Filters</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Surface style={styles.surface}>
            <Text style={[styles.subscribeText, commonStyles.bold]}>
              Subscribe now to access the report feature
            </Text>
            <Button
              style={styles.subscribeBtn}
              mode="elevated"
              onPress={() => navigation.navigate("Susbscribe")}
            >
              <Text style={[commonStyles.orangeText, commonStyles.bold]}>
                Subscribe Now
              </Text>
            </Button>
          </Surface>
        </View>

        <ViewAll
          title={"Top Missing items"}
          onPress={() => navigation.navigate("ItemList")}
        />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <ItemCard key={index} navigator={navigation} />
          )}
          keyExtractor={(item, index) => {
            `top-missing-${index}`;
          }}
          contentContainerStyle={{
            marginTop: 0,
            paddingBottom: 10,
            justifyContent: "flex-start",
            paddingTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <ViewAll
          title={"Top Reports"}
          onPress={() => console.log("View all top")}
        />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <ItemCard key={index} navigator={navigation} />
          )}
          keyExtractor={(item, index) => {
            `reported-${index}`;
          }}
          contentContainerStyle={{
            marginTop: 0,
            paddingBottom: 10,
            justifyContent: "flex-start",
            paddingTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  info: { fontSize: 16, color: "#888", marginTop: 5, fontWeight: "500" },
  welcomeText: {
    fontSize: 25,
    color: "#ff4201",
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  surface: {
    padding: 10,
    height: 90,
    width: "100%",
    marginTop: 10,
    backgroundColor: "#ff4201",
    borderRadius: 20,
  },
  subscribeText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  subscribeBtn: {
    width: "50%",
    marginTop: 8,
    padding: 0,
    borderRadius: 40,
  },
  title: {
    fontSize: 19,
  },
  topMissingItems: {
    marginTop: 10,
  },
  viewAll: {
    fontSize: 17,
  },
  viewAllContainer: {
    marginTop: 5,
  },
  filterBtn: {
    backgroundColor: "#ff4201",
    padding: 5,
    borderRadius: 20,
    width: "25%",
    alignItems: "center",
  },
  filterText: {
    color: "#fff",
  },
});
