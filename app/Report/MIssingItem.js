import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import commonStyles from "../../components/commons/styles/generic";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import SearchModal from "../../components/commons/SearchModal";
import * as DocumentPicker from "expo-document-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from "../../utils/utils";
import OrangeButton from "../../components/commons/OrangeButton";

const MissingItem = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [itemLossDate, setItemLossDate] = React.useState(null);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setItemLossDate(date);
    hideDatePicker();
  };
  const handleSelectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result);
      // Handle the selected file here
    } catch (error) {
      console.log("Error selecting file:", error);
    }
  };
  const handleReport = () => {
    navigation.navigate("ReportSuccess");
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ backgroundColor: "#fbfbfb" }}
    >
      <Text style={[commonStyles.bold, styles.upload]}>
        Upload a photo of the lost item
      </Text>
      <TouchableOpacity style={styles.uploadPicBtn} onPress={handleSelectFile}>
        <Ionicons name="image" size={20} color={"#888"} />
        <Text>Select File</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={[commonStyles.spacedContainer, styles.category]}
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Text style={commonStyles.bold}>Select Category</Text>
          <Ionicons name="chevron-down-outline" size={20} color={"#111"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.spacedContainer, styles.category]}
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Text style={commonStyles.bold}>Location</Text>
          <Ionicons name="chevron-down-outline" size={20} color={"#111"} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.spacedContainer, styles.category]}
          onPress={showDatePicker}
        >
          <Text style={commonStyles.bold}>
            {itemLossDate
              ? `${formatDate(itemLossDate)}`
              : "Select a Date and Time"}
          </Text>
          <Ionicons name="calendar-outline" size={20} color={"#111"} />
        </TouchableOpacity>
        <TextInput
          label={<Text style={styles.label}>What color is this item?</Text>}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={[styles.input, { height: 40 }]}
          mode="outlined"
          outlineStyle={styles.outlineStyle}
          cursorColor="#ff6200"
          textColor="#111"
        />
        <TextInput
          label={<Text style={styles.label}>Description</Text>}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
          mode="outlined"
          outlineStyle={styles.outlineStyle}
          cursorColor="#ff6200"
          textColor="#111"
          multiline
          numberOfLines={3}
        />

        <View style={styles.submitBtnContainer}>
          <OrangeButton title={"Report Item"} onPress={handleReport} />
        </View>
      </View>
      <SearchModal
        data={[]}
        setVisible={setVisible}
        visible={visible}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        navigation={navigation}
      />
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="spinner" // or "default"
        // minimumDate={new Date()}
        maximumDate={new Date()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  upload: { fontSize: 20, textAlign: "center", marginTop: 10 },
  uploadPicBtn: {
    borderRadius: 10,
    borderWidth: 2,
    width: "75%",
    alignSelf: "center",
    alignItems: "center",
    padding: 30,
    marginTop: 30,
    borderStyle: "dashed",
    borderColor: "#888",
  },
  category: {
    padding: 12,
    elevation: 2,
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
  },

  input: {
    marginBottom: 20,
    marginTop: 0,
    backgroundColor: "#fff",
    borderColor: "white",
    elevation: 4,
    borderWidth: 0,
    width: "80%",
    alignSelf: "center",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#ff6200",
    borderRadius: 15,
    padding: 5,
  },
  label: {
    color: "#555",
    fontWeight: "500",
  },
  outlineStyle: {
    borderColor: "#fff",
  },
  submitBtnContainer: {
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
});
export default MissingItem;
