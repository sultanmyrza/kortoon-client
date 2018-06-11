import React, { Component } from 'react';
import { View, Text } from 'react-native';
class KortoonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>{navigation.getParam('link')}</Text>
      </View>
    );
  }
}

export default KortoonDetail;
