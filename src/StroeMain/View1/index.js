/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import HeadMain_View1 from './HeadMainView/';
import BodyMain_View1 from './BodyMainView';
export default class MyComponent extends Component {

  render() {
    return (
      <View style ={{flex:1}}>
        <HeadMain_View1/>
        <BodyMain_View1/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
