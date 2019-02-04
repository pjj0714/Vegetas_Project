import React from "react";
import { Alert, StyleSheet, View, Text,Button } from "react-native";
import StyleButton from './styleButton'
import {createStackNavigator, createAppContainer} from "react-navigation"
import Main from './Main'

class App extends React.Component {
  
  state = {
    style: ""
  };

  styleCheck = ["비건", "오보", "락토", "락토 오보", "페스코", "해당 사항 없음"];



  clickEv = () => {
    const {navigate} = this.props.navigation
    navigate("Main")   
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> VEGETAS </Text>
        <View>
          <StyleButton styleCheck={this.styleCheck} clickEv={this.clickEv}/>
        </View>
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    App: App,
    Main: Main,
  },
  {
    initialRouteName: "App"
    // transitionConfig: () => zoomIn(500)
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  font: {
    fontWeight:'bold',
    fontSize:30
  }
});

