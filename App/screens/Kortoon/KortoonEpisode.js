import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Card, CardItem } from 'native-base';
import { getKortoon } from '../../utils/api';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class KortoonEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      loadingScenes: true
    };
  }
  componentDidMount() {
    this.animation.play();

    const kortoon = this.props.navigation.getParam('kortoon');
    getKortoon(kortoon._id).then(fetchedKortoon => {
      this.setState({ kortoon: fetchedKortoon, loadingScenes: false });
    });
  }
  componentDidUpdate() {
    if (this.state.loadingScenes) {
      this.animation.reset();
    }
  }
  renderEpisodes() {
    if (this.state.loadingScenes) {
      return (
        <View
          style={[
            styles.scrollViewContent,
            {
              height: 250
            }
          ]}
        >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../../lottie/assets/biking_is_cool.json')}
          />
        </View>
      );
    } else {
      let { kortoon } = this.state;
      let episodes = kortoon.episodes;
      const { navigation } = this.props;
      return (
        <View style={styles.scrollViewContent}>
          {episodes.map((episode, i) => (
            <TouchableWithoutFeedback
              key={i}
              onPress={() =>
                navigation.navigate('KortoonScene', {
                  kortoonId: kortoon._id,
                  episodeId: episode.episodeIndex
                })
              }
            >
              <View style={styles.row}>
                <Text style={{ fontSize: 16 }}>
                  {episode.title.slice(0, 23)}
                </Text>
                <Icon name="eye" size={30} color="#900" />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      );
    }
  }

  render() {
    const kortoon = this.props.navigation.getParam('kortoon');
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp'
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp'
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp'
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp'
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this.renderEpisodes()}
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={{
              uri: kortoon.bigPhotoUrl
            }}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }]
            }
          ]}
        >
          <Text style={styles.title}>{kortoon.title}</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: 'black',
    fontSize: 24
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  row: {
    flexDirection: 'row',
    height: 40,
    margin: 5,
    backgroundColor: '#D3D3D3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  }
});
