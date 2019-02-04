import React from "react";
import { TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";

export default (StyleButton = ({ style, clickEv }) => {
  const { width } = Dimensions.get("window");
  return style.map(vegeta => {
    return (
      <TouchableOpacity key={vegeta.name} onPress={() => clickEv(vegeta)}>
        <Image
          style={{ height: 60, width: width - 30, marginTop: 25 }}
          source={{ uri: vegeta.img }}
        />
      </TouchableOpacity>
    );
  });
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#336633",
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 10,
    width: 300,
    alignItems: "center"
  }
});
