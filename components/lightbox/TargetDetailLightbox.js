import React from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";

import BaseLightbox from "./BaseLightbox";

const TargetDetailLightbox = children => (
  <BaseLightbox verticalPercent={0.7} horizontalPercent={0.9}>
    <View style={styles.title}>
      <Text style={styles.name}>{children.title}</Text>
      <Text style={styles.close} onPress={() => Actions.pop()}>
        X
      </Text>
    </View>
    <View style={styles.targetDetail}>
      <Image
        style={styles.avatar}
        resizeMode="contain"
        source={{
          uri: children.avatar_url
        }}
      />
      <Button
        title="聊天"
        icon={{ name: "chat" }}
        buttonStyle={{
          backgroundColor: "#79006E",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 10
        }}
        onPress={() => Actions.chat({ title: children.title })}
      />
    </View>
  </BaseLightbox>
);

export default TargetDetailLightbox;

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    backgroundColor: "#af66a8",
    justifyContent: "space-between",
    height: 40,
    marginTop: -21
  },
  name: {
    marginLeft: 15,
    color: "#FFFFFF",
    fontSize: 20,
    top: 5
  },
  close: {
    color: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "stretch",
    fontSize: 20,
    top: 5
  },
  targetDetail: {
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 0
  },
  avatar: {
    width: 300,
    height: 300,
    marginLeft: 15
  }
});
