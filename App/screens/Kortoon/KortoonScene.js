import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';
import { getScenes } from '../../utils/api';

const screen = Dimensions.get('window');
const imageWidth = 1209;
const imageHeigh = 4836;
const naturalWidth = 720;
const naturalHeigh = 2880;

const finalWidth = screen.width;
const finalHeigh = (screen.height * naturalWidth) / screen.width;

class KortoonScene extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { navigation } = this.props;
    const kortoonId = navigation.getParam('kortoonId');
    const episodeId = navigation.getParam('episodeId');
    getScenes(kortoonId, episodeId).then(images => {
      this.setState({ images });
    });
  }
  renderImages() {
    try {
      console.log(screen.width, screen.height);
      console.log(imageWidth, imageHeigh);
      console.log(naturalWidth, naturalHeigh);
      return (
        <ScrollView style={{ backgroundColor: 'red', flex: 1 }}>
          {this.state.images.map(image => (
            <Image
              style={styles.image}
              key={image.alt}
              source={{ uri: image.src }}
            />
          ))}
        </ScrollView>
      );
    } catch (error) {
      return <ActivityIndicator size="large" />;
    }
  }
  render() {
    const { navigation } = this.props;
    const kortoonId = navigation.getParam('kortoonId');
    const episodeId = navigation.getParam('episodeId');
    return <View style={{ flex: 1 }}>{this.renderImages()}</View>;
  }
}

export default KortoonScene;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: Math.floor(finalHeigh),
    width: finalWidth
  }
});
