import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

import ajax from '../ajax';

export default class App extends Component {

  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
  };

  async componentDidMount(){
    const initDeals = await ajax.fetchInitialDeals();
    this.setState({deals: initDeals});
  }

  _searchDeals = async (searchTerm) => {
    let searchResults = [];
    if(searchTerm){
        searchResults = await ajax.fetchDealsSearchResults(searchTerm);
    }
    this.setState({dealsFromSearch: searchResults});
  }


  _setCurrentDeal = (dealId) => {
      this.setState({
        currentDealId: dealId
      });
  }

  _unsetCurrentDeal = () => {
      this.setState({
        currentDealId: null
      });
  }

  _getCurrentDeal = () => {
    return this.state.deals.find(
        (deal) => deal.key === this.state.currentDealId
    );
  }

  render() {

    const dealsToDisplay = this.state.dealsFromSearch.length > 0
    ? this.state.dealsFromSearch
    : this.state.deals;

    if(this.state.currentDealId){
      return (<DealDetail
        initialDealData = {this._getCurrentDeal()}
        onBack = {this._unsetCurrentDeal}
      />);
    }else if(dealsToDisplay.length >0){
      return (<View style={styles.container}>
        <SearchBar
          onSearch = {this._searchDeals}
        />
        <DealList
          deals = {dealsToDisplay}
          onItemPress = {this._setCurrentDeal}
        />
      </View>);
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
    margin: 20,
    overflow: 'visible',
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
