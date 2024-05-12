import * as React from "react";
import { Image, ScrollView, StatusBar } from "react-native"; // Import StatusBar
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Redirect, useRouter } from "expo-router";
import axios from "../request/requests";
import AppContext from "./context/AppContext";
import DefaultLoader from "../loaders/default";
import isValidEmail from "../utils/EmailValidator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import commonStyles from "../components/commons/styles/generic";

const SignInScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    // Handle login logic here
  };
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.signInText}>Sign in to your account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label={<Text style={styles.label}>Email</Text>}
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email" color={"#ff6200"} />}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            mode="outlined"
            outlineStyle={styles.outlineStyle}
            cursorColor="#ff6200"
          />
          <TextInput
            label={<Text style={styles.label}>Password</Text>}
            value={password}
            onChangeText={setPassword}
            left={<TextInput.Icon icon="lock" color={"#ff6200"} />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                color={"#ff6200"}
                onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
              />
            }
            secureTextEntry={!showPassword} // Toggle password visibility
            style={styles.input}
            mode="outlined"
            outlineStyle={styles.outlineStyle}
            cursorColor="#ff6200"
          />
          <View style={[commonStyles.centerFlexContainer, { marginTop: 10 }]}>
            <Text style={[styles.forgotPass]}>Forgot your </Text>
            <TouchableOpacity>
              <Text style={[styles.forgotPass, styles.orangeText]}>
                Password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 20,
    marginTop: 15,
    backgroundColor: "#fff",
    borderColor: "white",
    elevation: 5,
    borderWidth: 0,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#ff6200",
    borderRadius: 15,
    padding: 5,
  },
  signInText: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  inputContainer: {
    marginTop: 30,
  },
  forgotPass: {
    fontSize: 17,
    textAlign: "center",
    color: "gray",
  },
  boldOrangeText: {
    color: "#ff6200",
    fontWeight: "bold",
  },

  orangeText: {
    color: "#ff6200",
    fontWeight: "bold",
  },
  outlineStyle: {
    borderRadius: 15,
    borderColor: "#fff",
  },
  label: {
    color: "#ff6200",
  },
});

export default SignInScreen;
