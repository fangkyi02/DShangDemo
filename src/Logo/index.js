/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  BackAndroid,
} from 'react-native';

var {height , width} = Dimensions.get('window');

import StroeMain from '../StroeMain/';

export default class Logo extends PureComponent {

  componentWillMount() {
    global.na = this.props.navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
      console.warn(global.name);
      console.log(global.na.getCurrentRoutes());
      // console.warn(global.navigator.getCurrentRoutes().length);
      if (global.name !=='StroeMain') {
              global.na.jumpBack();
              return true;
      }
      return false;

    });
  }
  _ImageOnLoadEnd =()=>{
    setTimeout(()=>{
      global.na.push({
        name:'StroeMain',
      });
    },1000);


  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../Image/Logo.jpg')}
          style ={{height:height-20,width}}
          onLoadEnd ={this._ImageOnLoadEnd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
