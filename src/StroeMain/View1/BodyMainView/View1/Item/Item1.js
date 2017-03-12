/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';

const {width} = Dimensions.get('window');
width = width/5;

export default class Item1 extends Component {
  constructor(props){
    super(props);
    this.data=['婴幼童装','婴儿食品','家居用品','喂养用品','尿布纸巾','婴儿护理','出行用品','文体玩具','婴幼启蒙','全部分类'];
    this.image = [require('../../Image/home_category_1@2x.png'),
    require('../../Image/home_category_2@2x.png'),
    require('../../Image/home_category_3@2x.png'),
    require('../../Image/home_category_4@2x.png'),
    require('../../Image/home_category_5@2x.png'),
    require('../../Image/home_category_6@2x.png'),
    require('../../Image/home_category_7@2x.png'),
    require('../../Image/home_category_8@2x.png'),
    require('../../Image/home_category_9@2x.png'),
    require('../../Image/home_category_10@2x.png')
  ]
  }
  _ImageDown =(i)=>{
    alert('你按下了第'+i+"个");
  }
  _InitRender=()=>{
    return this.data.map((el,i)=>{
      return (
        <View style={{width:width,height:width,marginTop:10,backgroundColor:'white'}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
            <TouchableOpacity onPress ={this._ImageDown.bind(this,i)}>
              <Image source={this.image[i]} style={{width:50,height:50}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:0}}>
            <Text style={{fontSize:14}}>{el}</Text>
          </View>
        </View>
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this._InitRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:180,
    backgroundColor:'white',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
  },
});
