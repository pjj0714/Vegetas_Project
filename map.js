import React from "react";
import { MapView, Constants, Location, Permissions } from "expo";
import {
  //   Image,
  Platform,
  //   ScrollView,
  //   StyleSheet,
  Text,
  //   TouchableOpacity,
  View
} from "react-native";
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  state = {
    location: null,
    errorMessage: null,
    initialLocation: { latitude: 37.78825, longitude: -122.4324 },
    isLoaded: false
  };
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    this.setState({ isLoaded: true });
  };

  render() {
    if (!this.state.isLoaded) {
      return <Text>Loading</Text>;
    } else {
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.location
              ? this.state.location.coords.latitude
              : this.state.initialLocation.latitude,
            longitude: this.state.location
              ? this.state.location.coords.longitude
              : this.state.initialLocation.latitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 6.21, longitude: -75.569188781083 }}
            title={"Some Title"}
            description={"asdfgg"}
          />
        </MapView>
      );
    }
  }
}
