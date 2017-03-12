/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Camera from './Camera';

export default class LineView extends Component {
  componentWillMount() {
    console.log(global.na);
  }
  render() {
    return (
      <View style={{flexDirection:'row',height:30,marginTop:20,justifyContent:'space-around'}}>
        <View style={{justifyContent:'center',alignItems:'center',width:60,flex:1}}>
          <Text style={{color:'white',fontSize:16}} onPress={()=>{alert('位置被选中')}}>深圳V</Text>
        </View>
        <View style={{backgroundColor:'rgba(0,155,219,0.9)',borderColor:'black',borderWidth:0.5,width:260,borderRadius:10,marginLeft:5,flexDirection:'row'}} >
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:10,justifyContent:'center',marginLeft:10}}>
              <Text style={{borderBottomWidth:0,color:'white',fontSize:18}} onPress={()=>{alert('编辑框选中')}}>
                启赋
              </Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center',marginRight:8}} >
              <Image source={require('./Image/icon_search@2x.png')} style={{width:15,height:15}}/>
            </View>
          </View>
        </View>
        <View style={{width:30}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity onPress={()=>{
                global.na.push({
                  name:'Camers',
                });
              }}>
                <Image source={require('./Image/icon_scan@2x.png')} style={{width:20,height:20,}}/>
              </TouchableOpacity>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
