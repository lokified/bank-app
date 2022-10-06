import React from "react";
import { View, StyleSheet, SafeAreaView, Text, StatusBar } from "react-native";
import { Colors } from "../../config/Colors";
import { StatusBarColor } from "../../config/StatusbarColor";
import Button from "../components/Button";

function BalanceScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.white}
        barStyle={StatusBarColor.dark}
      />
      <View style={styles.balWrapper}>
        <View style={styles.userNameContainer}>
          <View style={styles.userImage}>
            <Text style={{ color: Colors.white }}>SO</Text>
          </View>
          <Text
            style={{
              color: Colors.secondary,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Sheldon Okware
          </Text>
        </View>

        <View style={styles.accountContainer}>
          <Text>Account Number</Text>
          <Text
            style={{
              fontSize: 20,
              color: Colors.secondary,
              fontWeight: "bold",
            }}
          >
            0123456789
          </Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text>My Balance</Text>
          <Text
            style={{
              fontSize: 25,
              color: Colors.secondary,
              fontWeight: "bold",
            }}
          >
            10,000
          </Text>
        </View>
      </View>
      <View
        style={{
          margin: 16,
        }}
      >
        <Button
          title="Send"
          backgroundColor={Colors.secondary}
          marginTop={8}
          color={Colors.white}
        />
        <Button
          title="Request Payment"
          backgroundColor={Colors.primary}
          marginTop={16}
          color={Colors.white}
        />
        <Button
          title="Withdraw"
          backgroundColor="green"
          marginTop={16}
          color={Colors.white}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  balWrapper: {
    margin: 16,
  },
  userNameContainer: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
  },
  userImage: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 100,
    width: 37,
    marginRight: 8,
  },
  accountContainer: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceContainer: {
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BalanceScreen;
