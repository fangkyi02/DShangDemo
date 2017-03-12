/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LineView from './Line/LineView';
import Title from './Title/Title';
export default class HeadMainView extends PureComponent {
  render() {
    return (
      <View style={styles.HeadView}>
        <View style={{flex:1}}>
          <Title/>
          <LineView/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeadView: {
    height:100,
    backgroundColor:'rgb(0,155,219)',
  },
});
