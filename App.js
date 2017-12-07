import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import AppContainer from "./containers/AppContainer";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
