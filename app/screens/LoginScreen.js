import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Keyboard,
  Platform,
  StatusBar,
} from "react-native";
import { Colors } from "../../config/Colors";
import { Screens } from "../../config/Screens";
import Button from "../components/Button";
import Input from "../components/Input";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import { StatusBarColor } from "../../config/StatusbarColor";

function LoginScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    accountNumber: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.accountNumber) {
      handleError("Please input account number", "accountNumber");
      valid = false;
    }

    if (!inputs.pin) {
      handleError("Please input pin", "pin");
      valid = false;
    }

    if (valid) {
      login();
    }
  };

  const login = () => {
    setloading(true);

    setTimeout(async () => {
      navigation.navigate(Screens.DashboardScreen);

      setloading(false);
      // let userData = await AsyncStorage.getItem("user");

      // if (userData) {
      //   userData = JSON.parse(userData);

      //   if (
      //     inputs.accountNumber == userData.email &&
      //     inputs.pin == userData.password
      //   ) {
      //     AsyncStorage.setItem(
      //       "user",
      //       JSON.stringify({ ...userData, loggedIn: true })
      //     );
      //     navigation.navigate(Screens.DashboardScreen);
      //   } else {
      //     Alert.alert("Error", "Invalid details");
      //   }
      // } else {
      //   Alert.alert("Error", "User does not exist");
      // }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle={StatusBarColor.dark} />
      <Loader visible={loading} />
      <View style={styles.welcome}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            color: Colors.secondary,
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: Colors.secondary,
          }}
        >
          Glad You are Here
        </Text>

        <View style={{ paddingTop: 20 }}>
          <Input
            label="Account Number"
            error={errors.accountNumber}
            onFocus={() => {
              handleError(null, "accountNumber");
            }}
            onChangeText={(text) => handleOnChange(text, "accountNumber")}
          />

          <Input
            label="Pin"
            error={errors.pin}
            pin
            keyboardType="numeric"
            onFocus={() => {
              handleError(null, "pin");
            }}
            onChangeText={(text) => handleOnChange(text, "pin")}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.secondary,
              paddingTop: 30,
            }}
          >
            Forgot pin ?
          </Text>
          <Button
            color={Colors.white}
            backgroundColor={Colors.primary}
            title="Login"
            onPress={validate}
          />

          <Text style={{ textAlign: "center", paddingTop: 10 }}>or</Text>

          <Button
            color={Colors.primary}
            title="Register"
            onPress={() => navigation.navigate(Screens.RegisterScreen)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcome: {
    margin: 20,
    paddingTop: 50,
  },
});

export default LoginScreen;
