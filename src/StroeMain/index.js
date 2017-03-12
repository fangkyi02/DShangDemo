import GiftedMessenger from 'react-native-gifted-messenger'
/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  BackAndroid,
  Alert,
  ActivityIndicatorIOS,
  Dimensions,
} from 'react-native'

import View1 from './View1/';
import View5_Main from './View5';

import TabNavigator from 'react-native-tab-navigator';

export default class StroeMain extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTab:'首页'
    };
  }


componentWillMount(){
    BackAndroid.addEventListener('hardwareBackPress', function() {
       if (global.na.getCurrentRoutes().length>1) {
         global.na.pop();
         return true;
       }
       return false;
  });
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === '首页'}
            title="首页"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image source={require('./Image/shouye@2x.png')} />}
            renderSelectedIcon={() => <Image source={require('./Image/shouye2@2x.png')} />}
            onPress={() => this.setState({ selectedTab: '首页' })}>
            <View1/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === '附近'}
              title="附近"
              selectedTitleStyle={{color:'red'}}
              renderIcon={() => <Image source={require('./Image/faxian@2x.png')} />}
              renderSelectedIcon={() => <Image source={require('./Image/faxian2@2x.png')} />}
              onPress={() => this.setState({ selectedTab: '附近' })}>
              <View1/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === '拼团'}
              title="拼团"
              selectedTitleStyle={{color:'red'}}
              renderIcon={() => <Image source={require('./Image/icon_group@2x.png')} />}
              renderSelectedIcon={() => <Image source={require('./Image/icon_group2@2x.png')} />}
              onPress={() => this.setState({ selectedTab: '拼团' })}>
              <View1/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '众筹'}
            title="众筹"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image source={require('./Image/yunyintang@2x@2x.png')} />}
            renderSelectedIcon={() => <Image source={require('./Image/yunyintang2@2x.png')} />}
            onPress={() => this.setState({ selectedTab: '众筹' })}>
            <View1/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '我的'}
            title="我的"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image source={require('./Image/wo@2x.png')} />}
            renderSelectedIcon={() => <Image source={require('./Image/wo2@2x.png')} />}
            onPress={() => this.setState({ selectedTab: '我的' })}>
            <View5_Main/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
