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
        source={require("../assets/animation/loading.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
      </AnimatedLoader>
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 500,
    height: 500
  },
});

export default Loader;
