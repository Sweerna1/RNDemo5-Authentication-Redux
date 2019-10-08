import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Redux
import store from "./redux/reducers";
import { Provider } from "react-redux";

//Components
import LoginForm from "./components/LoginForm";
import { checkForExpiredToken } from "./redux/actions/authActions";
store.dispatch(checkForExpiredToken());
export default function App() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}
