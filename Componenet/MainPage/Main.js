import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";
import { SearchBar } from "react-native-elements";
import Restaurant from "./RestaurantInfo";
import Nav from "./Nav";
import { FakeData } from "./FakeData";

export default class Main extends React.Component {
  state = {
    search: ""
  };


  updateSearch = search => {
    this.setState({ search });
  };

  handleCancle = () => {
    this.setState({
      search: ""
    });
  };

  mapEvent = () => {
    const {navigate} = this.props.navigation;
    navigate('Maps')
  };

  userInfo = () => {
  const {navigate} = this.props.navigation;
    navigate('MyPage')
  };

  restaurantInfo = () => {
    Alert.alert("식당 정보 페이지로 이동!");
  };

  render() {
    return (
      <View style={styles.contain}>
        <ScrollView>
          <Nav mapEvent={this.mapEvent} userInfo={this.userInfo} />
          <Image
            style={{ height: 150, marginTop: 10 }}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z7idV6ljWPh0pZGcl8mvBrffi_uV3Y20AhFAecBCaZN3IWE8sg"
            }}
          />
          <SearchBar
            platform={Platform.OS === "ios" ? "ios" : "android"}
            lightTheme
            clearIcon
            cancelButtonTitle='cancel'
            placeholder='Search'
            onChangeText={text => this.updateSearch(text)}
            onCancel={() => this.handleCancle()}
            value={this.state.search}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
            <Restaurant
              fakeData={FakeData}
              restaurantInfo={this.restaurantInfo}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  contain: {
    flex: 1,
    marginTop: 15
  },
  TextInputStyleClass: {
    textAlign: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 7,
    backgroundColor: "#FFFFFF"
  }
});
