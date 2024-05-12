import * as React from "react";
import { Image, StatusBar } from "react-native"; // Import StatusBar
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../../app/context/AppContext";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Icon, Searchbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { useQuery } from "react-query";
import axios from "../../../request/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MenuNoSearchBar = ({}) => {
  const { user, cart } = React.useContext(AppContext);
  const router = useRouter();
  console.log(`The catt data no search bar is ${JSON.stringify(cart?.length)}`);
  const handleLogout = async () => {
    // Implement your logout logic here
    // For example, clear user data from context or storage, navigate to login screen, etc.
    console.log("Logout button pressed");
    await AsyncStorage.removeItem("user");
    router.replace("/");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" hidden />
      <Image
        style={styles.cornerPiecesGroupIcon}
        source={require("../../../assets/images/corner-pieces.png")}
      />
      <View style={styles.formContainer}>
        <View>
          {user?.picture ? (
            <Image style={styles.profilePic} source={{ uri: user?.picture }} />
          ) : (
            <View style={styles.profilePicCircle}>
              <Text style={styles.initials}>
                {user?.first_name[0] + user?.first_name[1]}
              </Text>
            </View>
          )}
        </View>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={styles.hi}>Hi, {user?.first_name}</Text>
          <Text>Welcome to Sakaslist!</Text>
        </View>
      </View>

      <View style={styles.drawerBtnContainer}>
        <View
          style={{
            backgroundColor: "#019fff",
            elevation: 10,
            position: "relative",
            right: 10,
          }}
        >
          <DrawerToggleButton pressColor="blue" tintColor="#fff" />
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Icon source="logout" size={15} color="#ee4411" />
          {/* You can customize the icon and style as needed */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },

  cornerPiecesGroupIcon: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  formContainer: {
    width: "100%",
    zIndex: -1,
    backgroundColor: "#00afee",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingTop: 50,
    minHeight: 100,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: "contain",
  },
  drawerBtnContainer: {
    position: "absolute",
    right: 10,
    top: 30,
  },
  hi: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  cartBtn: {
    width: 45,
    height: 45,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    zIndex: 1,
  },

  logoutBtn: {
    width: 36,
    height: 36,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ddd",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    zIndex: 1,
    marginRight: 15,
    marginTop: 15,
    alignSelf: "center",
  },
  num: {
    color: "#ee4411",
    fontWeight: "bold",
  },
  selectBtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: 130,
  },
  selectBtn: {
    width: "45%",
    height: 40,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 10,
  },
  findText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  card: {
    height: 100,
    width: "90%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#aaa",
  },
  searchBar: {
    position: "absolute",
    top: 190,
    width: "90%",
    alignSelf: "center",
  },
  profilePicCircle: {
    backgroundColor: "#fff",
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 40,
  },
  initials: {
    fontSize: 25,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#df1744",
  },
});

// export default MenuNoSearchBar;
export default React.memo(MenuNoSearchBar);
