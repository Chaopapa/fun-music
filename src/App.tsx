/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList

} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, NavigationTabProp, NavigationBottomTabOptions } from "react-navigation-tabs";

//引入app栈导航
import FoundNavigator from "./navigator/foudNavigator";
import VideoNavigator from "./navigator/videoNavigator";
import MineNavigator from "./navigator/mineNavigator";
import CloundNavigator from "./navigator/cloudNavigator";
import AccountNavigator from "./navigator/accountNavigator";

import Ionicons from "react-native-vector-icons/Ionicons";

import { Provider } from "mobx-react";
import store from "./store"

interface NavigationOptionsParams {
  title: string,
  icon: string,
  navigation: NavigationTabProp
}

const getNavitionOptions = ({ title, icon, navigation }: NavigationOptionsParams): NavigationBottomTabOptions => {
  console.log(navigation);
  return {
    tabBarVisible: navigation.state.index == 0,
    tabBarLabel: ({ tintColor }: any) => <Text style={[{ color: tintColor }, S.tabText]}>{title}</Text>,
    tabBarIcon: ({ tintColor }) => <Ionicons name={icon} color={tintColor} size={26} />,
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  'found-nav': {
    screen: FoundNavigator,
    navigationOptions: ({ navigation }) => getNavitionOptions({ title: '发现', icon: 'ios-attach', navigation })
  },
  'video-nav': {
    screen: VideoNavigator,
    navigationOptions: ({ navigation }) => getNavitionOptions({ title: '视频', icon: 'ios-videocam', navigation })
  },
  'mine-nav': {
    screen: MineNavigator,
    navigationOptions: ({ navigation }) => getNavitionOptions({ title: '我的', icon: 'ios-musical-notes', navigation })

  },
  'clound-nav': {
    screen: CloundNavigator,
    navigationOptions: ({ navigation }) => getNavitionOptions({ title: '云村', icon: 'md-person', navigation }),

  },
  'account-nav': {
    screen: AccountNavigator,
    navigationOptions: ({ navigation }) => getNavitionOptions({ title: '帐号', icon: 'md-people', navigation })

  }

}, {
  tabBarOptions: {
    activeTintColor: '#ff4a41',
    style: {
      backgroundColor: '#e9e1de',
      height: 49
    }
  }
})

const AppContainer = createAppContainer(BottomTabNavigator);

const S = StyleSheet.create({
  tabText: {
    fontSize: 11
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
  },
  scroll: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

function App(){
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;
