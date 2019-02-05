import React from "react";
import { Button, View } from "react-native";

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: "Sign In",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20
    }
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    // const itemId = navigation.getParam("itemId", "NO-ID");
    // const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Go to Style"
          onPress={() => navigation.navigate("Style")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
