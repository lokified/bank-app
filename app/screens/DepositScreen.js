import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Platform,
} from "react-native";

import { StatusBarColor } from "../../config/StatusbarColor";
import { Colors } from "../../config/Colors";
import Input from "../components/Input";
import Button from "../components/Button";
import { Screens } from "../../config/Screens";
import PopUp from "../components/PopUp";

function DepositScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    amount: "",
  });
  const [errors, setErrors] = useState({});

  const [modalVisible, setModalVisible] = useState(false);


  const deposit = () => {
    let valid = true;

    if (!inputs.amount) {
      handleError("please enter an amount", "amount");
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
        text="Deposit is Successful"
      />

      <View style={styles.wrapper}>
        <Text
          style={{
            color: Colors.secondary,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Enter the amount
        </Text>

        <View style={styles.userContainer}>
          <View style={styles.userImage}>
            <Text style={{ color: Colors.white }}>AN</Text>
          </View>
          <View>
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Account no.
            </Text>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 12,
              }}
            >
              0123456789
            </Text>
          </View>
        </View>

        <Input
          fontSize={40}
          keyboardType="numeric"
          error={errors.amount}
          onFocus={() => {
            handleError(null, "amount");
          }}
          onChangeText={(text) => handleOnChange(text, "amount")}
        />

        <Button
          title="Deposit"
          backgroundColor={Colors.primary}
          color={Colors.white}
          marginTop={60}
          onPress={deposit}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  wrapper: {
    margin: 16,
  },
  userContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  userImage: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 100,
    width: 37,
    marginRight: 8,
  },
});
export default DepositScreen;
