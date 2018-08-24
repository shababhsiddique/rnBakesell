/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import {
  TextInput,
  StyleSheet,
} from 'react-native';

class SearchBar extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }
  state = {
    searchTerm: '',
  }

  _debouncedSearchDeals = debounce(this.props.onSearch,300);

  _handleChange = (searchTerm) => {
    this.setState({searchTerm: searchTerm}, () =>{
      this._debouncedSearchDeals(this.state.searchTerm);
    });
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText ={this._handleChange}
        placeholder = 'Search'
        ></TextInput>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 40,
    width: '100%'
  },
});

export default SearchBar;
