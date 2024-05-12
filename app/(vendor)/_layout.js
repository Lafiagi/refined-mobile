import { Icon } from "react-native-paper";
import { Drawer } from "../../components/commons/Drawer";

export default function Vendor() {
  return (
    <Drawer
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: { backgroundColor: "#00afee" },
        drawerLabelStyle: { color: "#fff", fontSize: 17 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Vendor Home",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="products"
        options={{
          drawerLabel: "Add New Product",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
            display: "none",
          },
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Edit Profile",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="wallet"
        options={{
          drawerLabel: "Wallet",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="(screens)"
        options={{
          drawerLabel: "",
          title: "",
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="completedorders"
        options={{
          drawerLabel: "Completed Orders",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="sentoutorders"
        options={{
          drawerLabel: "Sent Out Orders",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
          onclick: ()=>console.log("Hello world oooooooooo")
        }}
        
      />
    </Drawer>
  );
}
