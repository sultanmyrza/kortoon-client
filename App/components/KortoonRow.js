import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class KortoonRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { kortoon } = this.props;
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => alert(kortoon.link)}>
          <View style={styles.container}>
            <Image source={{ uri: kortoon.photoUrl }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.textHeader}>{kortoon.title.slice(0, 9)}</Text>
              <Text style={styles.textSummary} numberOfLines={2}>
                {kortoon.summary.slice(0, 19)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default KortoonRow;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10
  },
  container: {
    backgroundColor: 'pink'
  },
  image: {
    flex: 1,
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  info: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 3
  },
  textHeader: { color: 'red' },
  textSummary: { marginTop: 5 }
});
