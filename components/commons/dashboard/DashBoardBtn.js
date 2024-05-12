import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default DashBoardButton = ({ onPress, title, disabled }) => {
  return (
    <TouchableOpacity
      style={!disabled ? styles.btn : [styles.btn, { backgroundColor: "#ddd" }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    elevation: 4,
    padding: 15,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#00afee",
  },
});
