/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width,height} = Dimensions.get('window');

import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Body_View1 from '../View1';
import View_Item3 from '../View1/Item/Item3'

export default class TabView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '全部' },
      { key: '2', title: '热门单品'},
      { key: '3', title: '热门拼团'},
      { key: '4', title: '门店直播'},
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} style={{backgroundColor:'rgb(0,150,219)'}} indicatorStyle  ={{backgroundColor:'white',height:5}} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Body_View1/>;
    default:
      return (
        <ScrollView  style={{flex:1,marginTop:10}}>
          <View_Item3/>
        </ScrollView>
      )
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
},
page: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
});
