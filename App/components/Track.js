// @flow
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import StyleGuide from '../theme/StyleGuide';

export default class TrackComp extends React.PureComponent {
  onPress() {
    const { track, onPress } = this.props;
    onPress(track);
  }

  render() {
    const { onPress } = this;
    const { title, index } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.step}>{`${index}`}</Text>
        <Text style={styles.track}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: StyleGuide.spacing.small
  },
  step: {
    marginRight: StyleGuide.spacing.small,
    color: StyleGuide.palette.darkGray
  },
  track: {
    marginRight: StyleGuide.spacing.small,
    flex: 1,
    flexWrap: 'wrap'
  }
});
