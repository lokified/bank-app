import React, {useState} from 'react';

import { Pressable, Text, StyleSheet, View, Modal} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from '../../config/Colors';


function PopUp({onPress, modalVisible, text}) {

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon style={styles.icon} name="check" />
            <Text style={styles.modalText}>{text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPress}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalView: {
    height: 400,
    width: 300,
    marginHorizontal: "10%",
    marginVertical: "20%",
    backgroundColor: "white",
    borderRadius: 3,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 50,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 40,
  },
  icon: {
    fontSize: 60,
    color: "green"
  },
});

export default PopUp;