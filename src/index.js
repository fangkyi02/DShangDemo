
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

/* @flow */
import App from './app';
import {AppRegistry} from 'react-native';
AppRegistry.registerComponent('DShangDemo', () => App);
