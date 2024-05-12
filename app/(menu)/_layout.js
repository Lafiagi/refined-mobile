import { Drawer } from "../../components/commons/Drawer";

export default function RootLayout() {
  return (
    <Drawer
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#00afee" },
        drawerLabelStyle: { color: "#fff", fontSize: 17 },

        // drawerItemStyle: {backgroundColor: "#00afee",},
        // drawerActiveBackgroundColor: "#fff",
        // drawerActiveTintColor: "#fff"
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="cart" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "View Cart",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="findartisan" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Find Artisan",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="findproduct" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Find Product",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="marketplacehome" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "MarketPlace",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="producthistory" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Product History",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="sentoutorders" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Sent Out Orders",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "View/Edit Profile",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="servicehistory" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "View Service History",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="servicesrequests" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "View Service Requests",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="(subscriber)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "",
          title: "",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
