import React, {useEffect, useState} from "react";

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "../../config/Colors";
import { Screens } from "../../config/Screens";
import { StatusBarColor } from "../../config/StatusbarColor";

import Icon from "react-native-vector-icons/FontAwesome";
import Action from "../components/Action";

import AsyncStorage from "@react-native-async-storage/async-storage";

function DashboardScreen({ navigation }) {

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem("user");

    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );

    navigation.navigate(Screens.LoginScreen);
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondary}
        barStyle={StatusBarColor.light}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={[styles.headerText, { marginTop: 30 }]}>
            Welcome back,
          </Text>
          <Text style={styles.headerText}>{userDetails?.firstName}</Text>
          <TouchableOpacity activeOpacity={0.5} style={styles.account}>
            <Text style={styles.accountText}>Account number</Text>
            <Text style={styles.accountText}>01......89</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.quickAction}>Quick action</Text>
        <View style={styles.quickContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.actionContainer}
            onPress={() => navigation.navigate(Screens.DepositScreen)}
          >
            <Icon style={styles.icon} name="bank" />
            <Text style={styles.iconText}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.actionContainer}
            onPress={() => navigation.navigate(Screens.BalanceScreen, {
              firstName: userDetails?.firstName,
              lastName: userDetails?.lastName
            })}
          >
            <Icon style={styles.icon} name="money" />
            <Text style={styles.iconText}>Balance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.otherActionContainer}>
          <Action
            actionIcon="ban"
            actionText="Stop Cheque"
            onPress={() => navigation.navigate(Screens.StopChequeScreen)}
          />
          <Action
            actionIcon="lock"
            actionText="Change pin"
            onPress={() => navigation.navigate(Screens.ChangePinScreen)}
          />
          <Action
            actionIcon="book"
            actionText="Financial tips"
            onPress={() => navigation.navigate(Screens.FinancialTipsScreen)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.secondary,
    height: 250,
    width: "100%",
    padding: 16,
  },
  headerText: {
    color: Colors.white,
    fontWeight: "900",
    fontSize: 30,
  },
  account: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    marginTop: 30,
    borderColor: "#2d61e3",
  },
  accountText: {
    color: "#efefef",
    marginHorizontal: 8,
    fontSize: 15,
  },
  quickAction: {
    margin: 16,
  },
  quickContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionContainer: {
    borderWidth: 0.5,
    padding: 20,
    borderRadius: 3,
    borderColor: Colors.secondary,
  },
  icon: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 20,
  },
  iconText: {
    color: Colors.primary,
    marginTop: 8,
  },
  otherActionContainer: {
    margin: 16,
  },
});

export default DashboardScreen;
