/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './components/Login';
import HomeScreen from './components/Home';
import CheckAuthScreen from './components/CheckAuth';

class App extends React.Component{
  render(){
    return(
      <AppConatiner/>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Login:LoginScreen,
  Home:HomeScreen,
  CheckAuth: CheckAuthScreen
},{
  initialRouteName: "CheckAuth"
});

const AppConatiner = createAppContainer(AppNavigator);

export default App;
