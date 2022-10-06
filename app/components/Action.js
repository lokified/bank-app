import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors } from "../../config/Colors";
import Icon from "react-native-vector-icons/FontAwesome";


function Action({actionText, actionIcon, onPress = () => {}}) {
    return (
      <TouchableOpacity style={styles.otherAction} activeOpacity={0.7} onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name={actionIcon}
            style={{ fontSize: 18, color: Colors.secondary, marginRight: 12 }}
          />
          <Text style={[styles.actionStyle, { fontSize: 18 }]}>
            {actionText}
          </Text>
        </View>

        <Icon
          style={[styles.actionStyle, { fontSize: 20 }]}
          name="angle-right"
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  otherAction: {
    paddingHorizontal: 12,
    paddingVertical: 25,
    backgroundColor: "#e4e6eb",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  },
  actionStyle: {
    color: Colors.secondary,
  },
});

export default Action;