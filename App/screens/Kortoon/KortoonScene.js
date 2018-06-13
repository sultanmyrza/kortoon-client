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
import LottieView from 'lottie-react-native';
import { getScenes } from '../../utils/api';

const screen = Dimensions.get('window');
const screenWidth = screen.width;
const screenHeigh = screen.height;
const imageWidth = 1209;
const imageHeight = 4836;
const naturalWidth = 720;
const naturalHeight = 2880;

const finalWidth = screenWidth;
const finalHeigh = (screenWidth * naturalHeight) / naturalWidth;

class KortoonScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.animation.play();
    const { navigation } = this.props;
    const kortoonId = navigation.getParam('kortoonId');
    const episodeId = navigation.getParam('episodeId');
    getScenes(kortoonId, episodeId).then(images => {
      this.setState({ images, isLoading: false });
    });
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.animation.reset();
    }
  }

  _keyExtractor = (item, index) => item.alt;

  _renderItem = ({ item }) => {
    console.log(item);
    return (
      <Image style={styles.image} key={item.alt} source={{ uri: item.src }} />
    );
  };

  render() {
    const { navigation } = this.props;
    const kortoonId = navigation.getParam('kortoonId');
    const episodeId = navigation.getParam('episodeId');
    return (
      <View style={{ flex: 1 }}>
        {this.state.isLoading && (
          <View style={{ height: '100%' }}>
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              source={require('../../lottie/assets/biking_is_cool.json')}
            />
          </View>
        )}
        <FlatList
          style={{
            flex: 1
          }}
          data={this.state.images}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default KortoonScene;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: finalHeigh,
    width: finalWidth,
    alignSelf: 'center'
  }
});
