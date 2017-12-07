import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
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

export default class ChatListScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List containerStyle={{ marginTop: 0 }}>
        {list.map((l, i) => (
          <TouchableOpacity
            key={i}
            style={{ backgroundColor: "transparent", padding: 0 }}
            onPress={() => {
              Actions.chat({ title: l.title });
            }}
          >
            <ListItem
              roundAvatar
              avatarStyle={{ width: 60, height: 60, borderRadius: 60 }}
              avatarOverlayContainerStyle={{ borderRadius: 60 }}
              avatarContainerStyle={{ width: 60, height: 60, borderRadius: 60 }}
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
