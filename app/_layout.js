import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { Stack } from "expo-router";
import AppContext from "./context/AppContext";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Image } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#999",
    secondary: "yellow",
  },
};
export default function AppLayout() {
  const [user, setUser] = React.useState(null);
  const [acceptedRequests, setAcceptedRequests] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [launched, setLaunched] = React.useState(false);
  const [goliveDate, setGoliveDate] = React.useState(null);

  return (
    <AppContext.Provider
      value={{
        user: user,
        setUser: setUser,
        acceptedRequests: acceptedRequests,
        setAcceptedRequests: setAcceptedRequests,
        cart: cart,
        setCart: setCart,
        launched: launched,
        setLaunched: setLaunched,
        goliveDate: goliveDate,
        setGoliveDate: setGoliveDate,
      }}
    >
      <PaperProvider >
        <Image
          style={styles.welcome}
          resizeMode="contain"
          source={require("../assets/images/image1.png")}
        />
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="(menu)" />
          <Stack.Screen name="(artisan)" />
          <Stack.Screen name="(vendor)" />
          <Stack.Screen name="others" />
          <Stack.Screen name="onboarding" /> */}
        </Stack>
      </PaperProvider>
    </AppContext.Provider>
  );
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  welcome: {
    width: width,
    height: height * 0.368,
  },
});
