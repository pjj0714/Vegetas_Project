import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Animated,
  Easing
} from "react-native";
import {
  fromLeft,
  fromTop,
  fromRight,
  fromBottom,
  fadeIn,
  zoomIn,
  zoomOut,
  flipY,
  flipX
} from "react-navigation-transitions";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import SignUp from "./Componenet/Login/SignUp";
import SignIn from "./Componenet/Login/SignIn";
import MyPage from "./Componenet/UserInfo/myInfo";
import MyInfoMod from "./Componenet/UserInfo/myInfoMod";
import Style from './Componenet/StyleChoice/Style'
import Main from './Componenet/MainPage/Main'
import Maps from './Componenet/map'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    num: 1,
    id: null,
    pw: null,
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000 // Make it take a while
      }
    ).start();
  }

  render() {
    const { navigation } = this.props;
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={(styles.container, { opacity: fadeAnim })}>
        <ImageBackground
          source={require("./assets/vf.jpg")}
          style={styles.backImg}
        >
          <Text style={styles.text}>Vegetas</Text>
          <View style={styles.content}>
            <Text style={styles.text2}>🥗</Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={id => this.setState({ id })}
            value={this.state.id}
            placeholder="ID"
            placeholderTextColor="#FFF"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={pw => this.setState({ pw })}
            value={this.state.pw}
            secureTextEntry={true}
            placeholder="PASSWORD"
            placeholderTextColor="#FFF"
          />
          <View
            style={{
              flex: 0.1,
              flexDirection: "row",
              marginLeft: 45,
              marginRight: 45
            }}
          >
            <TouchableOpacity
              style={styles.btnStyle3}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Sign_In");
              }}
            >
              <Text style={styles.textbtnStyle3}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyle3}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Sign_Up");
              }}
            >
              <Text style={styles.textbtnStyle3}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyle3}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("MyPage");
              }}
            >
              <Text style={styles.textbtnStyle3}>MyPage</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.textbtnStyle}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle2}>
            <Text style={styles.textbtnStyle2}>Sign in with Kakao</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Sign_Up: SignUp,
    Sign_In: SignIn,
    MyPage: MyPage,
    My_Info_Mod: MyInfoMod,
    Style : Style,
    Main: Main,
    Maps: Maps
  },
  {
    initialRouteName: "Home"
    // transitionConfig: () => zoomIn(500)
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
    backgroundColor: "red"
  },
  backImg: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1
  },
  text: {
    flex: 0.2,
    fontSize: 70,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingTop: 100,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  content: {
    flex: 0.25
    // backgroundColor: "yellow"
  },
  textInput: {
    flex: 0.1,
    // backgroundColor: "#aaa",
    height: "10%",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#fff"
  },
  text2: {
    fontSize: 100,
    textAlign: "center"
  },
  btnStyle: {
    flex: 0.05,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgb(130,130,130)",
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  btnStyle2: {
    flex: 0.05,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    backgroundColor: "rgb(247,224,75)",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgb(130,130,130)",
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  btnStyle3: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgb(130,130,130)",
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  textbtnStyle: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(130,130,130)",
    textAlign: "center"
  },
  textbtnStyle2: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(56,31,31)",
    textAlign: "center"
  },
  textbtnStyle3: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(130,130,130)",
    lineHeight: 20,
    textAlign: "center"
  }
});
