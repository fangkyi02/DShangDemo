/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import Item1 from './Item/Item1';
import Item2 from './Item/Item2';
import Item3 from './Item/Item3';
var ViewPager = require('react-native-viewpager');

const BANNER_IMGS = [
    require('../Image/naifeng.jpg'),
    require('../Image/naifeng.jpg'),
    require('../Image/naifeng.jpg'),
    require('../Image/naifeng.jpg'),
];

const {width} = Dimensions.get('window');

export default class MyComponent extends Component {
  constructor(props){
    super(props);
    var dataSource = new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
    });
    // 实际的DataSources存放在state中
    this.state = {
        dataSource: dataSource.cloneWithPages(BANNER_IMGS)
    }
  }
  _renderPage(data, pageID) {
    return (
        <Image
            source={data}
            style={styles.page,{height:130,width}}/>
    );
}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} style={{flex:1}}>
          <ViewPager
            style={{height:130,width}}
            dataSource={this.state.dataSource}
            renderPage={this._renderPage.bind(this)}
            isLoop={true}
            autoPlay={true}/>
            <Item1/>
            <Item2/>
            <Item3/>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width
  },
});
