import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, FormLabel, FormInput } from "react-native-elements";

import { connect } from "react-redux";
import configureStore from "../configureStore";

const store = configureStore();

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      otpCode: "",
      isAuth: false
    };
  }

  _getOtpCode() {
    fetch("http://jerry.uaa-web.dev.ylb/api/auth/getOtpCode", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobile: this.state.mobile
      })
    })
      .then(response => {
        if (!response.ok) throw new Error("手機號碼格式錯誤");
        return response.json();
        response.json();
      })
      .then(responseJson => {
        store.dispatch({
          type: "GET_OTPCODE_SUCCESS",
          data: {
            mobile: responseJson.mobile,
            otpCode: responseJson.otpCode
          }
        });
        Actions.verify_lightbox(store.getState());
      })
      .catch(error => {
        alert(error);
      });
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.loginBg} source={require("../images/p_sign.png")}>
          <FormLabel>手機登入，開始幸福</FormLabel>
          <FormInput
            placeholder="請輸入手機號碼 例:0900-000000"
            onChangeText={mobile => this.setState({ mobile })}
            value={this.state.mobile}
          />
          <Button
            large
            buttonStyle={{ backgroundColor: "#79006E" }}
            textStyle={{ textAlign: "center" }}
            title={`開始幸福`}
            onPress={() => {
              this._getOtpCode();
            }}
          />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  loginBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "stretch"
  }
});
