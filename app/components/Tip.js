import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../config/Colors';

import Icon from "react-native-vector-icons/FontAwesome";


function Tip({title, description}) {

    const [hideDesc, setHideDesc] = useState(false)

    const handleHideDesc = () => setHideDesc(!hideDesc)

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={handleHideDesc}
      >
        <View style={{ width: "90%" }}>
          <Text style={styles.title}>{title}</Text>

          {hideDesc && <Text style={styles.description}>{description}</Text>}
        </View>
        <Icon
          style={{ color: "#6e6e70" }}
          name={hideDesc ? "caret-up" : "caret-down"}
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#efefef",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    color: "#6e6e70",
  },
  description: {
    color: Colors.unFocused,
    padding: 8,
  },
});

export default Tip;