import React from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, FormLabel } from "react-native-elements";

import configureStore from "../../configureStore";
import BaseLightbox from "./BaseLightbox";

const store = configureStore();

export default class VerifyLightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otpCode: ""
    };
  }

  _login() {
    fetch("http://jerry.uaa-web.dev.ylb/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobile: this.props.authenticate.mobile,
        otpCode: this.state.otpCode
      })
    })
      .then(response => {
        if (!response.ok) throw new Error("驗證碼錯誤");
        return response.json();
        response.json();
      })
      .then(responseJson => {
        store.dispatch({
          type: "LOGIN_SUCCESS",
          data: {
            mobile: responseJson.mobile,
            expireTime: responseJson.expireTime,
            sessionToken: responseJson.sessionToken,
            chatAuthToken: responseJson.chatAuthToken,
            chatUserId: responseJson.chatUserId,
            memberSn: responseJson.memberSn
          }
        });
        Actions.home();
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <BaseLightbox verticalPercent={0.6} horizontalPercent={0.9}>
        <View style={styles.container}>
          <FormLabel>貼心提醒：</FormLabel>
          <View style={styles.descriptionView}>
            <Text />
            <Text>
              未正式入會前，網站不會出現您的資料
              在任何情況下，您的手機號碼都不會被公開
              輸入手機號碼，可看到每月之星的清晰照片，屬於您的緣份可能就在其中！
            </Text>
            <Text />
            <Text>手機: {this.props.authenticate.mobile}</Text>
            <Text>驗證碼: {this.props.authenticate.otpCode}</Text>
            <Text>
              isAuth: {JSON.stringify(this.props.authenticate.isAuth)}
            </Text>
          </View>
          <FormLabel>驗證碼:</FormLabel>
          <TextInput
            style={styles.verifyInput}
            placeholder="請輸入驗證碼"
            onChangeText={otpCode => this.setState({ otpCode })}
          />
          <Button
            icon={{ name: "favorite" }}
            title="登入"
            buttonStyle={{ backgroundColor: "#79006E" }}
            onPress={() => {
              this._login();
            }}
          />
        </View>
      </BaseLightbox>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0
  },
  descriptionView: {
    paddingLeft: 20,
    paddingRight: 20
  },
  verifyInput: {
    paddingLeft: 20,
    paddingRight: 20
  }
});
