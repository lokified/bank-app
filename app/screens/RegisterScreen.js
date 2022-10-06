import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar
} from "react-native";
import { Colors } from "../../config/Colors";
import { Screens } from "../../config/Screens";
import Button from "../components/Button";
import Input from "../components/Input";
import { StatusBarColor } from "../../config/StatusbarColor";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";

function RegisterScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    accountNumber: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;

    if (!inputs.firstName) {
      handleError("Please input first name", "firstName");
      valid = false;
    }

    if (!inputs.lastName) {
      handleError("Please input last name", "lastName");
      valid = false;
    }

    if (!inputs.accountNumber) {
      handleError("Please input account number", "accountNumber");
      valid = false;
    }

    if (!inputs.pin) {
      handleError("Please input pin", "pin");
      valid = false;
    } else if (inputs.pin.length < 6) {
      handleError("pin should be minimum of 6 characters", "pin");
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setloading(true);

    setTimeout(async () => {
      navigation.navigate(Screens.LoginScreen);

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
      <StatusBar
        backgroundColor="#efefef"
        barStyle={StatusBarColor.dark}
      />

      <ScrollView>
        <Loader visible={loading} />
        <View style={styles.welcome}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 40,
              color: Colors.secondary,
            }}
          >
            Hey there!
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: Colors.secondary,
            }}
          >
            Register With Us
          </Text>

          <View style={{ paddingTop: 20 }}>
            <Input
              label="First Name"
              error={errors.firstName}
              onFocus={() => {
                handleError(null, "firstName");
              }}
              onChangeText={(text) => handleOnChange(text, "firstName")}
            />

            <Input
              label="Last Name"
              error={errors.lastName}
              onFocus={() => {
                handleError(null, "lastName");
              }}
              onChangeText={(text) => handleOnChange(text, "lastName")}
            />
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

            <Button
              color={Colors.white}
              backgroundColor={Colors.primary}
              title="Register"
              onPress={validate}
              marginTop={30}
            />
          </View>

          <Text
            style={styles.text}
            onPress={() => navigation.navigate(Screens.LoginScreen)}
          >
            Already registered? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  welcome: {
    margin: 20,
    paddingTop: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 12,
    color: Colors.primary,
    textAlign: "center",
    marginTop: 15,
    padding: 10,
  },
});
export default RegisterScreen;
