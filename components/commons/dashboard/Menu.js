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

const MenuComponent = ({ setProducts }) => {
  const { user, acceptedRequests, cart } = React.useContext(AppContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/");
  };

  console.log(`The catt data is ${JSON.stringify(cart?.length)}`);
  const fetchData = async (query) => {
    setLoading(true);
    await axios
      .get(`marketplace/products/?search=${query}`)
      .then((response) => {
        setProducts(response?.data);
        console.log(`The data is ${JSON.stringify(response?.data)}`);
      })
      .catch((error) => console.log(`Errorr ${error}`))
      .finally(() => setLoading(false));
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            right: 10,
            top: 40,
            zIndex: 1,
          }}
        >
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => router.push("/(menu)/servicesrequests")}
          >
            <Icon source="account-hard-hat" size={20} color="#00afee" />
            <Text style={styles.num}>{acceptedRequests?.length ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.cartBtn, { marginLeft: 10 }]}
            onPress={() =>
              router.push({
                pathname: "/(menu)/cart",
              })
            }
          >
            <Icon source="cart" size={20} color="#00afee" />
            <Text style={styles.num}>{cart?.length ?? 0}</Text>
          </TouchableOpacity>
        </View>
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

      <View style={styles.selectBtnContainer}>
        <TouchableOpacity
          style={[styles.selectBtn, { backgroundColor: "#cecf51" }]}
          onPress={() => router.push("findartisan")}
        >
          <Text style={[styles.findText, { color: "#555" }]}>
            Find Artisans
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.selectBtn,
            { marginLeft: 10, backgroundColor: "#36865a" },
          ]}
          onPress={() => router.push("findproduct")}
        >
          <Text style={styles.findText}>Find Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Service or Product. e.g plumbing"
          textBreakStrategy="balanced"
          onChangeText={(query) => {
            setSearchQuery(query);
            query.length > 0 ? fetchData(query) : setProducts([]);
          }}
          value={searchQuery}
          style={{ height: 50, backgroundColor: "#fff" }}
          elevation={3}
          onIconPress={() => console.log("submit clicked searching ......")}
          loading={loading}
        />
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
    minHeight: 250,
  },

  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: "contain",
  },
  drawerBtnContainer: {
    position: "absolute",
    right: 5,
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
  logoutBtn: {
    width: 36,
    height: 36,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 4,
    zIndex: 1,
    position: "relative",
    right: 55,
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuComponent;
