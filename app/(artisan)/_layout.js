import { Drawer } from "../../components/commons/Drawer";

export default function Artisan() {
  return (
    <Drawer
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#00afee" },
        drawerLabelStyle: { color: "#fff", fontSize: 17 },
      }}
    >
      {/* <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Artisan Home",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="completedrequests"
        options={{
          drawerLabel: "View Completed Requests",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />

      <Drawer.Screen
        name="paymenthistory"
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
        name="profile"
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
        name="services"
        options={{
          drawerLabel: "Add a Service",
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
          drawerLabel: "View Wallet",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="scheduledrequests"
        options={{
          drawerLabel: "View Scheduled Requests",
          title: "",
          drawerItemStyle: {
            borderBottomWidth: 0.5,
            borderColor: "#eee",
          },
        }}
      />
      <Drawer.Screen
        name="(artisanscreens)"
        options={{
          drawerLabel: "",
          title: "",
          drawerItemStyle: { display: "none" },
        }}
      /> */}
    </Drawer>
  );
}
