'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraEX extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:55,flexDirection:'row'}}>
          <View style={{marginLeft:15,alignItems:'flex-start',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>{global.na.pop();}}>
              <Text style={{fontSize:35,backgroundColor:'white'}}>
                {'<'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <View style={{}}>
              <TouchableOpacity >
                <Text style={{fontSize:22,}}>
                  扫描二维码
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={{flex:1,}}
            aspect={Camera.constants.Aspect.fill}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <View style={{borderRadius:10,width:250,height:250,borderWidth:3,borderColor:'red'}}></View>
            </View>
          </Camera>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
