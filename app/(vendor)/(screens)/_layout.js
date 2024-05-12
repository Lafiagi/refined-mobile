import { Stack } from "expo-router";
import React from "react";

export default function VendorLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="order" />
      <Stack.Screen name="rejectordersuccess" /> 
      <Stack.Screen name="acceptordersuccess" />
    </Stack>
  );
}
