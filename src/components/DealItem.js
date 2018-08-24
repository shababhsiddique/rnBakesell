/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {priceDisplay} from '../uti';

class DealItem extends Component {

  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  _handlePress = () => {
    this.props.onPress(this.props.deal.key);
  }

  render() {

    const {deal} = this.props;

    return (
      <TouchableOpacity
        style={styles.dealContainer}
        onPress={this._handlePress}
        >
        <Image
          source={{ uri: deal.media[0]}}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.subtitle}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dealContainer:{
    backgroundColor: '#FAF9FA',
    marginVertical: 10,
    elevation: 5,
  },
  info: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#bbb'
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    color: '#454754',
    marginBottom: 3,
    fontWeight: 'bold',
  },
  subtitle:{
    flexDirection: 'row'
  },
  cause: {
    flex: 1,
    color: '#454754',
  },
  price: {
    flex: 1,
    textAlign: 'right',
    color: '#454754',
  },

});

export default DealItem;
