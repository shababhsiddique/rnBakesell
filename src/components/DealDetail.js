/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {priceDisplay} from '../uti';

class DealDetail extends Component {

  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };

  state = {
    deal: this.props.initialDealData,
  };

  render() {

    const {deal} = this.state;

    return (
      <View style={styles.detailContainer}>
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
          <Text>Description goes here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer:{
    backgroundColor: '#FAF9FA',
    marginHorizontal: 20,
    marginVertical: 20,
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

export default DealDetail;
