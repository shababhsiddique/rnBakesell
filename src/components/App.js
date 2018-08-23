import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import DealList from './DealList';
import DealDetail from './DealDetail';

import ajax from '../ajax';

export default class App extends Component {

  state = {
    deals: [],
    currentDealId: null,
  };

  async componentDidMount(){
    const initDeals = await ajax.fetchInitialDeals();
    this.setState({deals: initDeals});
  }

  _setCurrentDeal = (dealId) => {
      this.setState({
        currentDealId: dealId
      });
  }

  _getCurrentDeal = () => {
    return this.state.deals.find(
        (deal) => deal.key === this.state.currentDealId
    );
  }

  render() {


    if(this.state.currentDealId){
      return (<DealDetail
        initialDealData = {this._getCurrentDeal()}
      />);
    }else if(this.state.deals.length >0){
      return (<DealList
        deals = {this.state.deals}
        onItemPress = {this._setCurrentDeal}
      />);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesell</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F7FA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize:30,
    color: '#454754',
    textAlign: 'center'
  }
});
