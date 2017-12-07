import React from "react";
import { Text, View, ViewPropTypes, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import configureStore from "../../configureStore";
import MenuList from "./MenuList";

const store = configureStore();

class DrawerContent extends React.Component {
  _logout() {
    store.dispatch({
      type: "LOGOUT_SUCCESS"
    });
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuList
          name={"home"}
          color={"pink"}
          link={() => Actions.home()}
          title={"首頁"}
        />
        <MenuList
          name={"view-list"}
          color={"pink"}
          link={() => Actions.targetlist()}
          title={"好友"}
        />
        <MenuList
          name={"chat"}
          color={"pink"}
          link={() => Actions.chatlist()}
          title={"聊天"}
        />
        <MenuList
          name={"power-settings-new"}
          color={"pink"}
          link={() => this._logout()}
          title={"登出"}
        />
        <MenuList
          name={"close"}
          color={"rgba(52,52,52,0.5)"}
          link={() => Actions.pop()}
          title={"關閉"}
        />
      </View>
    );
  }
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "transparent"
  }
});
