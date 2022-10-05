import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text, Platform } from "react-native";

import { StatusBarColor } from "../../config/StatusbarColor";
import { Colors } from "../../config/Colors";


function DepositScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.white}
          barStyle={StatusBarColor.dark}
        />
        <Text>Deposit</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default DepositScreen;