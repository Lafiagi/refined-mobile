import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  boldOrangeText: {
    color: "#ff6200",
    fontWeight: "bold",
  },

  orangeText: {
    color: "#ff6200",
    fontWeight: "bold",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },

  centerFlexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  spacedContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

});

export default commonStyles;
