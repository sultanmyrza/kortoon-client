import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import KortoonList from './KortoonList';
import KortoonEpisode from './KortoonEpisode';
import KortoonScene from './KortoonScene';

const KortoonStackNavigator = createStackNavigator({
  KortoonList: {
    screen: KortoonList,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Kortoon List'
    })
  },
  KortoonEpisode: {
    screen: KortoonEpisode,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      headerLeft: (
        <Button
          onPress={() => navigation.goBack()}
          title="back"
          color="black"
        />
      ),
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0
      }
    })
  },
  KortoonScene: {
    screen: KortoonScene,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Kortoon Scene'
    })
  }
});

export default KortoonStackNavigator;
