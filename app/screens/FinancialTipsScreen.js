import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import { Colors } from "../../config/Colors";
import { StatusBarColor } from "../../config/StatusbarColor";

import Icon from "react-native-vector-icons/FontAwesome";
import Tip from "../components/Tip";

function FinancialTipsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.white}
        barStyle={StatusBarColor.dark}
      />
      <ScrollView>
        <View style={styles.tipsContainer}>
          <Text style={styles.text}>
            We have some tips for you to learn from us <Icon name="comments" />
          </Text>

          <View style={{ marginTop: -100 }}>
            <Image
              resizeMode="contain"
              style={{
                width: "100%",
              }}
              source={require("../assets/images/insurance.webp")}
            />
            <View style={{ marginTop: -100 }}>
              <Tip
                title="1. Buy the Right Insurance."
                description="You should also consider insuring against financial disasters, not just annoyances. Buy renters or homeowner’s insurance, car insurance, disability insurance, and health insurance."
              />

              <Tip
                title="2. Use Your Credit Card Wisely."
                description="Using your credit card wisely and keeping your credit utilization ratio below 30 percent can help you keep your credit score in check."
              />

              <Tip
                title="3. Don’t Forget Your Taxes"
                description="One piece of financial advice for saving on taxes is to contribute to your 401(k) or other retirement plans. Clever tax-avoidance schemes are often illegal, so make sure you’re honest and make legal choices that can save you money."
              />

              <Tip
                title="4. Keep Track of Interest Rates"
                description="Knowing the interest rates on these various types of accounts is essential because you might be spending more or earning less on your various debts and savings commitments. It’s best to keep an eye out on your interest rates, so you know what accounts to focus on."
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  tipsContainer: {
    margin: 16,
  },
  text: {
    fontSize: 30,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});
export default FinancialTipsScreen;
