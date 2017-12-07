import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

class Chatview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.renderBubble = this.renderBubble.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: Math.round(Math.random() * 1000000),
          text: "Yes, and I use Gifted Chat!",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 30, 0)),
          user: {
            _id: 1,
            name: "Phoebe Pan"
          },
          sent: true,
          received: false
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "Are you building a chat app?",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 25, 0)),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "http://lorempixel.com/400/400/cats/1/"
          }
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "You are officially rocking GiftedChat.",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 24, 0)),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "http://lorempixel.com/400/400/cats/1/"
          }
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "住天龍國，50年。",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 23, 0)),
          user: {
            _id: 1,
            name: "Phoebe Pan"
          },
          sent: true,
          received: true
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: "你住哪裡住多久?",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 22, 0)),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "http://lorempixel.com/400/400/cats/1/"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#E4CCE2"
          },
          right: {
            backgroundColor: "#79006E"
          }
        }}
        textStyle={{
          left: {
            color: "#79006E"
          },
          right: {
            color: "white"
          }
        }}
      />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
        renderBubble={this.renderBubble}
      />
    );
  }
}

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Chatview />;
  }
}
