import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../config/Colors";

function Button({
  title,
  color,
  backgroundColor,
  marginTop,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        { backgroundColor: backgroundColor, marginTop: marginTop },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: color }]}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    borderRadius: 3,
    marginTop: 20,
  },
  text: {
    textAlign: "center",
  },
});

export default Button;
