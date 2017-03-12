/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
const {width,height} = Dimensions.get('window');

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

export default class TabView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '全部' },
      { key: '2', title: '热门单品'},
      { key: '3', title: '热门拼团'},
      { key: '3', title: '门店直播'},
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case '4':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    default:
      return null;
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
  backgroundColor:'rgb(0,155,219)'
},
page: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
});
