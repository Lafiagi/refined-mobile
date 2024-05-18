import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

import { PaperProvider } from "react-native-paper";
import ForgotPasswordScreen from "./app/ForgotPassword";
import Login from "./app/Login";
import OTPScreen from "./app/OTP";
import ResetPassword from "./app/ResetPassword";
import ResetSuccess from "./app/ResetSuccess";
import SuccessfulVerification from "./app/SuccessfulVerification";
import Register from "./app/Register";
import Home from "./app/Home/Tabs/Tabs";
import OnboardingContext from "./app/context/OnboardingContext";
import ItemList from "./app/Item/ItemList";
import Details from "./app/Item/Details";
import FilterScreen from "./app/Commons/FilterScreen";
import SavedItemList from "./app/Item/SavedItemList";
import ItemByCategoryList from "./app/Item/ItemByCategoryList";
import EditProfile from "./app/Profile/EditProfile";
import Notifications from "./app/Notifications/Notifications";
import MissingItem from "./app/Report/MIssingItem";
import ReportItem from "./app/Report/ReportItem";
import ReportSuccess from "./app/Report/ReportSuccess";
import Susbscribe from "./app/Susbscribe/Susbscribe";
import PaymentOptions from "./app/Susbscribe/PaymentOptions";
import PaymentSuccess from "./app/Susbscribe/PaymentSuccess";

const Stack = createNativeStackNavigator();

export function currencyFormat(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function App() {
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  React.useEffect(() => {
    async function setData() {
      const firstLaunch = await AsyncStorage.getItem("firstLaunch");
      AsyncStorage.setItem("firstLaunch", "true");
      if (firstLaunch === null || firstLaunch === "false") {
        console.log("Nale execute", firstLaunch);
        setFirstLaunch(true);
        AsyncStorage.setItem("firstLaunch", "true");
      } else {
        console.log("Wrong man", firstLaunch);
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    <PaperProvider>
      {/* <AppContext.Provider> */}
      <OnboardingContext.Provider
        value={{ isSignedIn: isSignedIn, setIsSignedIn: setIsSignedIn }}
      >
        <NavigationContainer>
          {firstLaunch ? (
            <Login />
          ) : isSignedIn ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="Home"
                component={Home}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="ItemList"
                component={ItemList}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="Details"
                component={Details}
              />

              <Stack.Screen
                options={{ headerShown: true, statusBarHidden: true }}
                name="Filter"
                component={FilterScreen}
              />

              <Stack.Screen
                options={{ headerShown: true, statusBarHidden: true }}
                name="Saved"
                component={SavedItemList}
              />
              <Stack.Screen
                options={{ headerShown: true, statusBarHidden: true }}
                name="ItemByCategoryList"
                component={ItemByCategoryList}
              />

              <Stack.Screen
                options={{ headerShown: true, statusBarHidden: true }}
                name="EditProfile"
                component={EditProfile}
              />

              <Stack.Screen
                options={{ headerShown: true, statusBarHidden: true }}
                name="Notifications"
                component={Notifications}
              />
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="MissingItem"
                component={MissingItem}
              />
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="ReportItem"
                component={ReportItem}
              />
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="ReportSuccess"
                component={ReportSuccess}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="Susbscribe"
                component={Susbscribe}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="PaymentOptions"
                component={PaymentOptions}
              />

<Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="PaymentSuccess"
                component={PaymentSuccess}
              />
              {/* PaymentSuccess */}
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="Register"
                component={Register}
              />
              <Stack.Screen
                options={{ headerShown: true, title: null }}
                name="ForgotPassword"
                component={ForgotPasswordScreen}
              />

              <Stack.Screen
                options={{ headerShown: true, title: null }}
                name="OTP"
                component={OTPScreen}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="ResetPassword"
                component={ResetPassword}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="ResetSuccess"
                component={ResetSuccess}
              />

              <Stack.Screen
                options={{ headerShown: false, statusBarHidden: true }}
                name="SuccessfulVerification"
                component={SuccessfulVerification}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
        {/* </AppContext.Provider> */}
      </OnboardingContext.Provider>
    </PaperProvider>
  );
}

export default App;
