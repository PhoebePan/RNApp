import React, { Component } from "react";
import { AppRegistry } from "react-native";
import {
  Router,
  Scene,
  Tabs,
  Drawer,
  Lightbox,
  Actions
} from "react-native-router-flux";
import { Icon } from "react-native-elements";
import "babel-polyfill";
import { login, logout } from "../actions/actions";

import LoginContainer from "./LoginContainer";
import HomeContainer from "./HomeContainer";
import TargetListContainer from "./TargetListContainer";
import ChatListContainer from "./ChatListContainer";
import ChatContainer from "./ChatContainer";

import VerifyLightbox from "../components/lightbox/VerifyLightbox";
import TargetDetailLightbox from "../components/lightbox/TargetDetailLightbox";
import DrawerContent from "../components/drawer/DrawerContent";

const TabIcon = ({ iconname, focused }) => {
  return <Icon name={iconname} color={focused ? "white" : "#54004A"} />;
};

const DrawerIcon = () => {
  return <Icon name="menu" color="white" size={30} />;
};

export default class AppContainer extends React.Component {
  render() {
    return (
      <Router>
        <Lightbox>
          <Scene key="root">
            <Scene
              key="login"
              component={LoginContainer}
              title="Login"
              hideNavBar
              initial
            />
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerIcon={DrawerIcon}
              drawerWidth={200}
            >
              {/* Tab Container */}
              <Scene
                key="tabbar"
                tabs={true}
                tabBarStyle={{ backgroundColor: "#79006E" }}
                hideNavBar
                tabBarPosition={"bottom"}
              >
                <Scene
                  key="home"
                  component={HomeContainer}
                  title="首頁"
                  navBarButtonColor="white"
                  navigationBarStyle={{
                    backgroundColor: "#79006E",
                    height: 40
                  }}
                  iconname="home"
                  icon={TabIcon}
                />
                <Scene
                  key="targetlist"
                  component={TargetListContainer}
                  navBarButtonColor="white"
                  navigationBarStyle={{
                    backgroundColor: "#79006E",
                    height: 40
                  }}
                  title="好友"
                  iconname="view-list"
                  icon={TabIcon}
                />
                <Scene
                  key="chatlist"
                  component={ChatListContainer}
                  navBarButtonColor="white"
                  navigationBarStyle={{
                    backgroundColor: "#79006E",
                    height: 40
                  }}
                  title="聊天"
                  iconname="chat"
                  icon={TabIcon}
                />
              </Scene>
            </Drawer>
            <Scene
              key="chat"
              component={ChatContainer}
              navBarButtonColor="white"
              navigationBarStyle={{
                backgroundColor: "#79006E",
                height: 40
              }}
              title=""
            />
          </Scene>
          <Scene key="verify_lightbox" component={VerifyLightbox} hideNavBar />
          <Scene
            key="target_detail_lightbox"
            component={TargetDetailLightbox}
            hideNavBar
          />
        </Lightbox>
      </Router>
    );
  }
}
