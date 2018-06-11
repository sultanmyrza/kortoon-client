import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderImageScrollView, {
  TriggeringView
} from 'react-native-image-header-scroll-view';

class KortoonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const kortoon = navigation.getParam('kortoon');
    return (
      <HeaderImageScrollView
        maxHeight={250}
        minHeight={100}
        headerImage={{ uri: kortoon.photoUrl }}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <Text>Scroll Me!</Text>
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    );
  }
}

export default KortoonDetail;
