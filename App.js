/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Match, Miss, MemoryRouter as Router } from "react-router";
// import { Router, Scene, Stack } from "react-native-router-flux";
import { View, StyleSheet } from "react-native";
import { createAppContainer, StackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { Provider } from "react-redux";

import configureStore from "./src/store";

const store = configureStore();

import LiveOrdersContainer from "./src/containers/LiveOrders";
import OrderHistoryContainer from "./src/containers/OrderHistory";
import AccountComponent from "./src/components/Account";

const bottomTabs = createMaterialBottomTabNavigator(
  {
    LiveOrders: {
      screen: LiveOrdersContainer,
      navigationOptions: {
        tabBarLabel: "Live Orders",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-restaurant" color={tintColor} size={24} />
        )
      }
    },
    OrderHistory: {
      screen: OrderHistoryContainer,
      navigationOptions: {
        tabBarLabel: "Order History",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list" color={tintColor} size={24} />
        )
      }
    },
    Account: {
      screen: AccountComponent,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    activeColor: "rgb(255,66,151)",
    barStyle: { backgroundColor: '#fff' }
  }
);

const BottomTabsContainer = createAppContainer(bottomTabs);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <BottomTabsContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
