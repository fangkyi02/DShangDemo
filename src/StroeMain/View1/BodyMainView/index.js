/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import TabView from './Tab/TabView';
export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1,}}>
          <TabView/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(239,239,244)'
  },
});
