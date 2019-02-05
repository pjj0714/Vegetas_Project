import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: "Sign Up",
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
    pwConfirm: null
  };
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // const { navigation } = this.props;
    // const itemId = navigation.getParam("itemId", "NO-ID");
    // const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text2}>🍀</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={id => {
            this.setState({ id });
          }}
          value={this.state.id}
          placeholder="ID"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={pw => this.setState({ pw })}
          value={this.state.pw}
          secureTextEntry={true}
          placeholder="PASSWORD"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={pwConfirm => this.setState({ pwConfirm })}
          value={this.state.pwConfirm}
          secureTextEntry={true}
          placeholder="PASSWORD"
          placeholderTextColor="#333"
        />
        <View
          style={{
            flex: 0.15,
            flexDirection: "row",
            marginLeft: 45,
            marginRight: 45
          }}
        >
          <TouchableOpacity
            style={styles.btnStyle3}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate("Sign_Up");
            }}
          >
            <Text style={styles.textbtnStyle3}>확인</Text>
          </TouchableOpacity>
        </View>

        {/*<Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
            />
        <Button title="Go back" onPress={() => navigation.goBack()} />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 0.25,
    justifyContent: "center"
    // backgroundColor: "yellow"
  },
  textInput: {
    flex: 0.1,
    // backgroundColor: "red",
    height: "10%",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10
  },
  text2: {
    fontSize: 100,
    textAlign: "center"
  },
  btnStyle3: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#efefef",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center"
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
