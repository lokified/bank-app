import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from "react-native";


function StopChequeScreen(props) {
    return (
        <SafeAreaView>
            <Text>Stop cheque</Text>
             </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default StopChequeScreen;