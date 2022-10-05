import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

function BalanceScreen(props) {
    return (
        <SafeAreaView> </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default BalanceScreen;