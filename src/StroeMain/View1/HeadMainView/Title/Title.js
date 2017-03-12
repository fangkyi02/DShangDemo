/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.titleview}>
        <Text style={styles.titleStyle}>淘宝奶粉专卖店</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleview:{
    alignItems:'center',
    paddingTop:15,
  },
  titleStyle: {
    color:'white',
    fontSize:20,
  },
});
