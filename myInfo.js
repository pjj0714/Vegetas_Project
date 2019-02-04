import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class MyPage extends React.Component {
  static navigationOptions = {
    title: "My Page",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20
    }
  };
  state = {
    id: null,
    pw: null,
    img: null
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    // const itemId = navigation.getParam("itemId", "NO-ID");
    // const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: -100,
              marginTop: -100,
              width: 200,
              height: 200,
              borderRadius: 100,
              borderColor: "rgb(230,230,230)",
              borderWidth: 1
              // shadowColor: "#000",
              // shadowOpacity: 1,
              // shadowOffset: { width: 2, height: 2 },
              // shadowRadius: 5
            }}
            source={require("./assets/myPageImg.png")}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            marginLeft: 50,
            marginRight: 50
          }}
        >
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              //   this.props.navigation.navigate("Home");
              navigation.navigate("My_Info_Mod");
            }}
          >
            <Text style={styles.textbtnStyle3}>회원정보 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              //   this.props.navigation.navigate("Sign_Up");
            }}
          >
            <Text style={styles.textbtnStyle3}>채식 타입</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              //   this.props.navigation.navigate("Sign_Up");
            }}
          >
            <Text style={styles.textbtnStyle3}>약관 및 정책</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 2,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5
  },
  text2: {
    fontSize: 100,
    textAlign: "center"
  },
  btnStyle3: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgb(130,130,130)",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  textbtnStyle3: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center"
  }
});
