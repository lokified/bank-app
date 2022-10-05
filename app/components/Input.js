import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Colors } from "../../config/Colors";

function Input({label, error, pin, onFocus = () => {}, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        secureTextEntry={pin}
        style={[
          styles.input,
          {
            borderColor: error
              ? Colors.error
              : isFocused
              ? Colors.focused
              : Colors.unFocused,
          },
        ]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.secondary,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1.18,
    padding: 6,
    color: Colors.secondary,
  },
  error: {
    color: "red",
    fontSize: 10,
    marginTop: 1,
  },
});

export default Input;
