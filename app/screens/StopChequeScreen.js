import React, {useState} from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Platform,
} from "react-native";
import { Colors } from "../../config/Colors";
import { StatusBarColor } from "../../config/StatusbarColor";
import Button from "../components/Button";
import Input from "../components/Input";

function StopChequeScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    chequeNo: "",
  });

  const [errors, setErrors] = useState({});

  const submit = () => {

    let valid = true;

    if(!inputs.chequeNo) {
      handleError("Please enter a cheque number", "chequeNo")
      valid = false
    }
  }

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

      <View style={styles.chequeContainer}>
        <Text style={styles.text}>Stop Cheque Payment</Text>

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


        <View style={{
          marginTop: 30
        }}>
          <Input
            label="Cheque no."
            error={errors.chequeNo}
            keyboardType="numeric"
            onFocus={() => {
              handleError(null, "chequeNo");
            }}
            onChangeText={(text) => handleOnChange(text, "chequeNo")}
          />

          <Button
            title="Submit"
            backgroundColor={Colors.primary}
            color={Colors.white}
            marginTop={40}
            onPress={submit}
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
  chequeContainer: {
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
  text: {
    fontSize: 30,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});

export default StopChequeScreen;
