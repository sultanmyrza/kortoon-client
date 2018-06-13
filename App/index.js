/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import Kortoon from './screens/Kortoon';
import BasicExample from './screens/BasicExample';

// TODO: fix this warnings
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

export default class App extends Component {
  render() {
    return <Kortoon />;
  }
}
