import { Slot, Stack } from "expo-router";
import React, { useState } from "react";
import OnboardingContext from "../context/OnboardingContext";

export default function OnboardingLayout() {
  const [verificationData, setVerificationData] = React.useState({});
  const [goliveDate, setGoliveDate] = React.useState(null);
  return (
    <OnboardingContext.Provider
      value={{
        verificationData: verificationData,
        setVerificationData: setVerificationData,
        goliveDate: goliveDate,
        setGoliveDate: setGoliveDate
      }}
    >
      <Slot />
    </OnboardingContext.Provider>
  );
}
