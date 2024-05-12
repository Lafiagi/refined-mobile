import { Stack } from "expo-router";
import React from "react";

export default function SubscriberLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="store" />
      {/* <Stack.Screen name="rateclient" />  */}
      {/* <Stack.Screen name="schedulevisit" /> */}
      {/* <Stack.Screen name="rejectrequestsuccess" /> */}
      <Stack.Screen name="servicepayment" />
    </Stack>
  );
}
