import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default (Restaurnt = ({ fakeData,restaurantInfo }) => {
    let i = 0;
  return fakeData.map(data => {
      i++
    return (
      <TouchableOpacity onPress={restaurantInfo} style={{flex:0.5, flexDirection:"row"}}>
        <Image key={i} style={{ width: 130, height: 130 }} source={{ uri: data }} />
        <Text> CSS 어려워 CSS 어려워{'\n'} </Text>
         <Text> CSS 어려워 CSS 어려워
             
             sad
              </Text>
         <Text> CSS 어려워 CSS 어려워{'\n'} </Text>
     
        </TouchableOpacity>
    );
  });
});
