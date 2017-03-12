/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');
width = width/2-10;
export default class Item3 extends Component {
  _InitRender =()=>{
    return Array.from({length:10}).map((el,i)=>{
      return (
        <View style={{marginTop:10,height:width+10,width,backgroundColor:'rgba(255,255,255,0.5)'}}>
          <View style={{marginTop:10,width:width,height:width-20,flexDirection:'column'}}>
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
              <TouchableOpacity>
                <Image source={require('../../Image/naifeng.jpg')} style={{width:width-20,height:width-20}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'red'}}>金额:320</Text>
          </View>
        </View>
      )
    })
  }
  render() {
    console.warn(width);
    return (
      <View style={styles.container}>
        {this._InitRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:(width/2+10)*10,
    flexWrap:'wrap',
    justifyContent:'space-around',
    flexDirection:'row',
    marginTop:5,
  },
});
