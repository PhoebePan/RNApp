import React, { Component } from "react";
import { View, Text, Button, WebView } from "react-native";
import { Actions } from "react-native-router-flux";

const DEFAULT_URL = "https://chaos-dev.yuelaobank.com/";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: DEFAULT_URL
    };
  }

  render() {
    return <WebView source={{ uri: DEFAULT_URL }} style={{ marginTop: -40 }} />;
  }
}
