import React, { Component } from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";


export default StyleButton = ({ styleCheck,clickEv }) => {
  return styleCheck.map(vegeta => {
    return (
      <TouchableOpacity style={styles.button} onPress={clickEv}>
        <Text> {vegeta}</Text>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#336633',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 10,
    width: 300,
    alignItems:'center'
    },
  });
