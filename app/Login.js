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
import axios from "../request/requests";
import AppContext from "./context/AppContext";
import DefaultLoader from "../loaders/default";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, TextInput } from "react-native-paper";
import commonStyles from "../components/commons/styles/generic";
import LoginRegisterLayout from "../components/layouts/LoginRegisterLayout";
import OnboardingContext from "./context/OnboardingContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const { setIsSignedIn } = React.useContext(OnboardingContext);

  const handleLogin = () => {
    setIsSignedIn(true);
  };

  return (
    <LoginRegisterLayout>
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
              textColor="#111"
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
              textColor="#111"
            />
            <View style={[commonStyles.centerFlexContainer, { marginTop: 10 }]}>
              <Text style={[styles.forgotPass]}>Forgot your </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={[styles.forgotPass, styles.orangeText]}>
                  Password?
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
            >
              <Text style={[commonStyles.bold, styles.login]}>Login</Text>
            </Button>

            <View style={[commonStyles.centerFlexContainer, { marginTop: 30 }]}>
              <Text style={[styles.forgotPass]}>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={[styles.forgotPass, styles.orangeText]}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LoginRegisterLayout>
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
    elevation: 4,
    borderWidth: 0,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#ff6200",
    borderRadius: 15,
    padding: 5,
  },
  signInText: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "400",
    textTransform: "capitalize",
    color: "gray",
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
    borderColor: "#fff",
  },
  label: {
    color: "#ff6200",
  },
  login: {
    fontSize: 17,
    color: "#fff",
  },
});

export default Login;
