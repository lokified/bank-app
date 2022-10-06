import React from "react";
import { View , StyleSheet, Text} from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import { Colors } from "../../config/Colors";

function Loader({ visible }) {
  return (
    <View>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/animation/round-loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  },
});

export default Loader;
