import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import DealList from './DealList';

import ajax from '../ajax';

export default class App extends Component {

  state = {
    deals: [],
  };

  async componentDidMount(){
    const initDeals = await ajax.fetchInitialDeals();
    this.setState({deals: initDeals});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.deals.length > 0 ?(
            <DealList deals = {this.state.deals}/>
          ):(
            <Text style={styles.header}>Bakesell</Text>
          )}
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
