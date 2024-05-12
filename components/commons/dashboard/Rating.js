import React, { useState } from "react";
import { View } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const RatingComponent = ({ handleRating, defaultRating }) => {
  return (
    <View>
      <AirbnbRating
        count={5} // Number of rating items (stars)
        reviews={["Terrible", "Bad", "Good", "Very Good", "Excellent"]} // Text displayed for each star
        defaultRating={defaultRating ?? 0} // Default starting value
        size={30} // Size of the rating stars
        onFinishRating={handleRating} // Callback when a rating is selected
        isDisabled={defaultRating > 0}
      />
    </View>
  );
};

export default RatingComponent;
