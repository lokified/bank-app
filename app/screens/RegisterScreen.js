import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Platform } from "react-native";

function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android"? 20 : 0
    }
});
export default RegisterScreen;
