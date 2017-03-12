/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';



const {width} = Dimensions.get('window');
// const BANNER_IMGS = [
//     require('../../Image/naifeng.jpg'),
//     require('../../Image/naifeng.jpg'),
//     require('../../Image/naifeng.jpg'),
//     require('../../Image/naifeng.jpg'),
// ];

export default class Item2 extends Component {
  constructor(props){
    super(props);

  }

  _InitRender=()=>{
    return Array.from({length:10}).map((el,i)=>{
      return (
        <View style={{height:130,width:100}}>
          <View style={{alignItems:'center',flex:2}}>
            <TouchableOpacity>
              <Image source ={require('../../Image/naifeng.jpg')} style={{width:80,height:80}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,marginTop:34}}>
            <Text>
              美赞臣进口奶粉
            </Text>
          </View>
          <View style={{flex:1,alignItems:'center'}}>
            <Text style={{color:'red'}}>价格:320</Text>
          </View>
        </View>
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:17,marginLeft:25,fontWeight:'500',letterSpacing:10,textAlignVertical:'center'}}>
            今日推荐
          </Text>
          <Text style={{color:'rgb(214,214,217)',fontSize:18,marginLeft:10,padding:5,textAlign:'right'}}>
            {'  SELLING'}
          </Text>
          <Text style={{color:'rgb(214,214,217)',flex:1,fontSize:16,textAlign:'right',textAlignVertical:'center'}}>
            {'查看更多 >'}
          </Text>
        </View>
          <ScrollView horizontal={true} style={{flex:1,marginTop:10}}>
            {this._InitRender()}
          </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:175,
    marginTop:20,
    backgroundColor:'white'
  },
});
