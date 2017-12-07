import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { List, ListItem } from "react-native-elements";

const list = [
  {
    title: "少女E",
    avatar_url: "http://lorempixel.com/400/400/cats/1/",
    subtitle: "我明明記得我有寫自我介紹阿，莫名其妙..................."
  },
  {
    title: "有夠帥",
    avatar_url: "http://lorempixel.com/400/400/cats/3/",
    subtitle: "雖然我只有99分的帥氣，但是我有100分的體貼＋100分的好脾氣..."
  },
  {
    title: "有夠正",
    avatar_url: "http://lorempixel.com/400/400/cats/5/",
    subtitle: "人森就是不斷的幫自己挖坑跳~"
  }
];

export default class TargetListScreen extends Component {
  render() {
    return (
      <List containerStyle={{ marginTop: 0 }}>
        {list.map((l, i) => (
          <TouchableOpacity
            key={i}
            style={{
              backgroundColor: "transparent",
              padding: 0
            }}
            onPress={() => Actions.target_detail_lightbox(l)}
          >
            <ListItem
              roundAvatar
              avatarStyle={{ flex: 1, width: 50, height: 50, borderRadius: 50 }}
              avatarOverlayContainerStyle={{ borderRadius: 50 }}
              avatarContainerStyle={{ width: 50, height: 50, borderRadius: 50 }}
              hideChevron
              avatar={{ uri: l.avatar_url }}
              key={i}
              title={l.title}
              subtitle={l.subtitle}
            />
          </TouchableOpacity>
        ))}
      </List>
    );
  }
}
