import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const GallerySwiper = ({ images }) => {
  return images && images.length > 0 ? (
    <View style={styles.container}>
      <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2}>
        {images.map((image, index) => (
          <View key={`swiper-${index}`} style={styles.child}>
            <Image style={styles.profilePic} source={{ uri: image }} />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  ) : null;
};


export const ImageGallerySwiper = ({ images }) => {
  return images && images.length > 0 ? (
    <View style={styles.container}>
      <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={1}>
        {images.map((image, index) => (
          <View key={`swiper-${index}`} style={styles.child}>
            <Image style={styles.profilePic} source={{ uri: image?.picture }} />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  ) : null;
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: width * 0.95,
    alignSelf: "center",
  },
  child: { width: 300, height: 200, justifyContent: "center" },
  profilePic: {
    width: "100%",
    height: "100%",
  },
});

export default GallerySwiper;
