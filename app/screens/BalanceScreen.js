import React from "react";
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from "react-native";
import { Colors } from "../../config/Colors";
import { StatusBarColor } from "../../config/StatusbarColor";

function BalanceScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        backgroundColor={Colors.white}
        barStyle={StatusBarColor.dark} />
      <Text>Balance</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default BalanceScreen;
