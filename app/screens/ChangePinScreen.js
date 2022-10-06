import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
} from "react-native";
import { Colors } from "../../config/Colors";
import { Screens } from "../../config/Screens";
import { StatusBarColor } from "../../config/StatusbarColor";
import Button from "../components/Button";
import Input from "../components/Input";
import PopUp from "../components/PopUp";

function ChangePinScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    oldPin: "",
    newPin: "",
    confirmPin: "",
  });

  const [errors, setErrors] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  const update = () => {
    let valid = true;

    if (!inputs.oldPin) {
      handleError("Please enter your old pin", "oldPin");
      valid = false;
    }

    if (!inputs.newPin) {
      handleError("Please enter your new pin", "newPin");
      valid = false;
    }

    if (!inputs.confirmPin) {
      handleError("Please confirm your new pin", "confirmPin");
      valid = false;
    } else if (inputs.confirmPin != inputs.newPin) {
      handleError("pin does not match", "confirmPin");
      valid = false;
    }

    if (valid) {
      setModalVisible(true);
    }
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
        backgroundColor={Colors.white}
        barStyle={StatusBarColor.dark}
      />

      <PopUp
        modalVisible={modalVisible}
        onPress={() => navigation.navigate(Screens.DashboardScreen)}
        text="Updated Successfully"
      />

      <View style={styles.pinContainer}>
        <Text style={styles.text}>Set your new pin</Text>
        <View>
          <Input
            label="Enter old pin"
            error={errors.oldPin}
            keyboardType="numeric"
            onFocus={() => {
              handleError(null, "oldPin");
            }}
            onChangeText={(text) => handleOnChange(text, "oldPin")}
          />
          <Input
            label="Enter new pin"
            error={errors.newPin}
            keyboardType="numeric"
            onFocus={() => {
              handleError(null, "newPin");
            }}
            onChangeText={(text) => handleOnChange(text, "newPin")}
          />
          <Input
            label="Confirm new pin"
            error={errors.confirmPin}
            keyboardType="numeric"
            onFocus={() => {
              handleError(null, "confirmPin");
            }}
            onChangeText={(text) => handleOnChange(text, "confirmPin")}
          />

          <Button
            title="Update"
            backgroundColor={Colors.primary}
            color={Colors.white}
            marginTop={40}
            onPress={update}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  pinContainer: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});

export default ChangePinScreen;
