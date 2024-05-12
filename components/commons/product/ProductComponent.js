import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { currencyFormat } from "../../../utils/utils";
import Naira from "../dashboard/Naira";
import { useRouter } from "expo-router";

export default Product = ({ product }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() =>
        router.push({
          pathname: "productdetails",
          params: { id: product?.id },
        })
      }
    >
      <View style={styles.formContainer}>
        <View>
          <Image
            style={styles.profilePic}
            source={
              product?.picture
                ? { uri: product?.picture }
                : require("../../../assets/images/rectangle-4396.png")
            }
          />
        </View>

        <View style={{ marginLeft: 20, marginTop: 10, flex: 1 }}>
          <Text style={styles.product} numberOfLines={2}>
            {product?.name}
          </Text>
          <Text style={styles.price}>
            <Naira />
            {currencyFormat(product?.price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    backgroundColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    minHeight: 100,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 4,
    marginTop: 15,
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 10,
    resizeMode: "contain",
  },
  product: {
    fontSize: 17,
    textTransform: "capitalize",
  },
  price: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  info: {
    textAlign: "center",
    fontSize: 17,
    marginTop: 15,
  },
});
