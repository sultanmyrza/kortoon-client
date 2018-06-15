import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { getKortoons } from '../../utils/api';
import KortoonAlbumComponent from '../../components/KortoonAlbumComponent';

class KortoonList extends Component {
  constructor(props) {
    super(props);
    this.state = { kortoons: [], isLoading: true };
  }
  componentDidMount() {
    getKortoons()
      .then(kortoons => {
        this.setState({
          isLoading: false,
          kortoons
        });
      })
      .catch(err => {
        console.warn(err);
      });
  }
  renderKortoon(kortoon) {
    return (
      <KortoonAlbumComponent
        kortoon={kortoon}
        navigation={this.props.navigation}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && (
          <View style={styles.horizontal}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading kortoons</Text>
          </View>
        )}
        {this.state.isLoading || (
          <FlatList
            style={{ backgroundColor: 'green', width: '100%' }}
            data={this.state.kortoons}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => this.renderKortoon(item)}
            numColumns={3}
          />
        )}
      </View>
    );
  }
}

export default KortoonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  horizontal: {
    padding: 10
  }
});
