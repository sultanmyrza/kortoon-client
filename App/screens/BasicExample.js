import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.animation.reset()}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../lottie/assets/biking_is_cool.json')}
          />
          <Text style={{}}>Loading...</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
