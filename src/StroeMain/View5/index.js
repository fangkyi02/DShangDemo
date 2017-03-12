/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
const {width} = Dimensions.get('window');
width = width/3;

const Image_Source = [
  require('./Image/1@3x.png'),
  require('./Image/2@3x.png'),
  require('./Image/3@3x.png'),
  require('./Image/4@3x.png'),
  require('./Image/5@3x.png'),
  require('./Image/6@3x.png'),
  require('./Image/7@3x.png'),
  require('./Image/8@3x.png'),
  require('./Image/9@3x.png')];

const Info = [
  '我的团',
  '我的订单',
  '收货地址',
  '个人资料',
  '关注门店',
  '购物车',
  '获取值',
  '增加值',
  '我的订单'
];
export default class View5_Main extends Component {
  _InitRender=()=>{
    return Image_Source.map((el,i)=>{
      return(
        <View style ={{width,height:width,backgroundColor:'white',borderWidth:0.5,borderColor:'rgba(102,102,102,0.3)'}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress ={()=>{alert('第'+i+'个按钮被按下')}}>
                <Image source ={el} style={{height:50,width:50}}/>
              </TouchableOpacity>
              <View style={{alignItems:'center'}}>
                <Text style={{color:'rgb(105,105,105)'}}>
                  {Info[i]}
                </Text>
              </View>
            </View>
        </View>
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center',justifyContent:'center',height:55}}>
          <Text style={{fontSize:20,fontWeight:'500',color:'rgb(102,102,102)'}}>
            首页
          </Text>
        </View>
        <View style={{height:170,backgroundColor:'rgb(0,155,219)'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('./Image/icon@2x.png')} style={{width:150,height:150}}/>
          </View>
        </View>
        <View style = {{height:350,flexDirection:'row',flexWrap:'wrap',marginTop:0}}>
          {this._InitRender()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
