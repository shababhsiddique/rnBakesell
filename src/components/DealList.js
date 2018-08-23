/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

class DealList extends Component {

  static propTypes = {
    deals: PropTypes.array.isRequired,
  }

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 30,
    backgroundColor: '#F7F7F6',
    flex: 1,
    width: '100%'
  },
  listItem: {
    padding: 30
  },
  dealContainer: {

  },
});

export default DealList;
