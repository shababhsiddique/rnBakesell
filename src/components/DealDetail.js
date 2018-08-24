/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {priceDisplay} from '../uti';
import ajax from '../ajax';

class DealDetail extends Component {

  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  state = {
    deal: this.props.initialDealData,
  };

  async componentDidMount(){
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({
      deal: fullDeal
    });
  }

  render() {

    const {deal} = this.state;

    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onBack}
          >
          <Text style={styles.backLink}> Back </Text>
        </TouchableOpacity>
        <ScrollView  style={styles.detailContainer}>
          <Image
            source={{ uri: deal.media[0]}}
            style={styles.image}
          />
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.info}>
            <View style={styles.subtitle}>
              <Text style={styles.cause}>{deal.cause.name}</Text>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
            </View>
          </View>
          {deal.user && (<View style={styles.user}>
            <Image
              source={{uri: deal.user.avatar}}
              style={styles.avatar}
            />
            <Text>{deal.user.name}</Text>
          </View>)}
          <View style={styles.desc}>
            <Text style={styles.desctext}>{deal.description}</Text>
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer:{
    backgroundColor: '#FAF9FA',
    marginHorizontal: 20,
    marginVertical: 5,
    elevation: 5,
  },
  backLink: {
    marginTop: 35,
    marginBottom: 5,
    marginLeft: 10,
    height: 30,
    width: 50,
    textAlign: 'left',
    fontSize: 13,
    padding: 7,
    color: '#4F95E0',
    fontWeight: 'bold'
  },
  info: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#bbb'
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    backgroundColor: '#454754',
    padding: 10,
    color: '#F7F7F7',
    marginBottom: 0,
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
  user: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#bbb',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  desc: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#bbb'
  },
  desctext: {
      color: '#454754',
      borderWidth: 1,
      padding: 10,
      borderColor: '#bbb'
  }

});

export default DealDetail;
