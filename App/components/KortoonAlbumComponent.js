import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
class KortoonAlbumComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { kortoon, navigation } = this.props;
    return (
      <View style={styles.row}>
        <TouchableHighlight
          onPress={() => navigation.navigate('KortoonEpisode', { kortoon })}
        >
          <View style={styles.container}>
            <Image source={{ uri: kortoon.photoUrl }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.textHeader}>{kortoon.title.slice(0, 9)}</Text>
              <Text style={styles.textSummary} numberOfLines={2}>
                {kortoon.summary.slice(0, 19)}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default KortoonAlbumComponent;

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
