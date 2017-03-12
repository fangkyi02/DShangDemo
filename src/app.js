/* @flow */
'use strict'

import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';

import StroeMain from './StroeMain'
import Camera from './StroeMain/View1/HeadMainView/Line/Camera'
// import PassTest from './view/PassTest'

import SplashScreen from 'react-native-splash-screen';

import {
  Platform,
} from 'react-native';

//
const INITIAL_ROUTE = {
  name:'StroeMain',
}
export default class App extends Component {

  componentDidMount() {
       // do anything while splash screen keeps, use await to wait for an async task.
      SplashScreen.hide();
  }

  _renderScene = (route,navigator) => {
    console.log(route.name);
    switch (route.name) {
      case 'StroeMain':
        return <StroeMain navigator={navigator}></StroeMain>
        break;
      case 'Camers':
        return <Camera></Camera>
      default:
    }
  }
  _configScene=(route, routeStack)=>{
    // return true;
    return(Navigator.SceneConfigs.FadeAndroid);
  }

  render() {
    return (
      <Navigator
        configureScene ={this._configScene}
        initialRoute={INITIAL_ROUTE}
        renderScene={this._renderScene}
        />
    );
  }
}
