import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import StyleButton from "./styleButton";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "../MainPage/Main";
import {style} from '../MainPage/FakeData'

export default class Style extends React.Component {
  state = {
    style: ""
  };

  clickEv = (style) => {
    this.setState({
      style: style.name
    })
    Alert.alert(this.state.style)
    const { navigate } = this.props.navigation;
    navigate("Main");
  };

  render() {
    const { navigate } = this.props.navigation;
      if(this.state.style === '') {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> VEGETAS </Text>
        <View>
          <StyleButton
            style={style}
            clickEv={this.clickEv.bind(this)}
          />
        </View>
      </View>
    )} else {
      return <Main />
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:80,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  font: {
    fontWeight: "bold",
    fontSize: 30
  }
});
