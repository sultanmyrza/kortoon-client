import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import StyleGuide from '../theme/StyleGuide';
class KortoonAlbumComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { kortoon, navigation } = this.props;
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('KortoonEpisode', { kortoon })}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: kortoon.photoUrl }} />
          <View style={styles.metadata}>
            <Text type="headline">{kortoon.title.slice(0, 9)}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default KortoonAlbumComponent;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 1,
    marginVertical: 10,
    marginLeft: StyleGuide.spacing.small,
    marginBottom: 1,
    ...StyleGuide.styles.borderRadius,
    ...StyleGuide.styles.shadow
  },
  image: {
    overflow: 'hidden',
    height: 163,
    width: 163,
    borderTopLeftRadius: StyleGuide.styles.borderRadius.borderRadius,
    borderTopRightRadius: StyleGuide.styles.borderRadius.borderRadius
  },
  metadata: {
    padding: StyleGuide.spacing.tiny
  }
});
