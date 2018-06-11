import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class KortoonRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { kortoon } = this.props;
    return (
      <View style={styles.container}>
        <Text>{kortoon.title}</Text>
        <Text>{kortoon.summary}</Text>
        <Text>{kortoon.link}</Text>
        <Image
          source={{ uri: kortoon.photoUrl }}
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
  }
}

export default KortoonRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    margin: 10
  }
});
