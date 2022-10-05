import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

function DashboardScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DashboardScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default DashboardScreen;
