import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { Card, CardItem, Icon, Right, Left } from 'native-base';
import HeaderImageScrollView, {
  TriggeringView
} from 'react-native-image-header-scroll-view';
import { getKortoon } from '../../utils/api';

class KortoonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const kortoon = this.props.navigation.getParam('kortoon');
    getKortoon(kortoon._id).then(fetchedKortoon => {
      console.log(fetchedKortoon);
      this.setState({ kortoon: fetchedKortoon });
    });
  }
  renderEpisodes() {
    try {
      let { kortoon } = this.state;
      let episodes = kortoon.episodes;
      const { navigation } = this.props;
      return (
        <ScrollView style={styles.episodesContainer}>
          <Card>
            {episodes.map(episode => (
              <CardItem key={episode.title} style={styles.episodeRow}>
                <View style={{ paddingRight: 20 }}>
                  <Text>O</Text>
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={styles.episodeText}>{episode.title}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('KortoonScene', {
                        kortoonId: kortoon._id,
                        episodeId: episode.episodeIndex
                      })
                    }
                  >
                    <View>
                      <Text>Read</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Text>Download</Text>
                </View>
              </CardItem>
            ))}
          </Card>
        </ScrollView>
      );
    } catch (error) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
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
        <View style={{ flex: 1 }}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <Text>{kortoon.title}</Text>
            <Text>{kortoon.summary}</Text>
            {this.renderEpisodes()}
          </TriggeringView>
        </View>
      </HeaderImageScrollView>
    );
  }
}

export default KortoonDetail;

const styles = StyleSheet.create({
  episodesContainer: { backgroundColor: 'red' },
  episodeRow: {},
  episodeText: {}
});
