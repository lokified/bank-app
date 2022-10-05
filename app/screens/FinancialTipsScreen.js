import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from "react-native";


function FinancialTipsScreen(props) {
    return (
        <SafeAreaView>
            <Text>Finance</Text>
             </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
export default FinancialTipsScreen;