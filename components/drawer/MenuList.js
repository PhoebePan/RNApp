import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Actions } from "react-native-router-flux";

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list}>
        <Icon name={this.props.name} color={this.props.color} />
        <Button
          onPress={this.props.link}
          buttonStyle={{ backgroundColor: "white" }}
          textStyle={{
            color: "#5c5c5c",
            textAlign: "left",
            top: -10,
            left: -10
          }}
          title={this.props.title}
        />
      </View>
    );
  }
}

export default MenuList;

const styles = StyleSheet.create({
  list: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    height: 50
  }
});
