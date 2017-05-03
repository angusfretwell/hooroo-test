import React, { Component } from 'react';
import _ from 'lodash';

import data from '../../data.json';
import ListSummary from '../ListSummary';
import ListSort from '../ListSort';
import ListItem from '../ListItem';
import * as sortMethods from './sortMethods';
import './List.css'

export default class List extends Component {
  constructor() {
   super();

   this.state = {
     sortFilters: {},
     location: '',
     hotels: [],
     filterBy: ''
   };

   this.setSortMethod = this.setSortMethod.bind(this);
 };

  componentDidMount() {
    // NOTE: simulate fetching data asynchronously from an API
    setTimeout(() => {
      this.setState({
        sortFilters: data.sort_filters,
        location: data.query.location,
        hotels: data.hotels,
        sortMethod: 'default'
      });
    }, 150);
  }

  setSortMethod(sortMethod) {
    this.setState({ sortMethod: _.camelCase(sortMethod) });
  }

  render() {
    if (!this.state.hotels.length) {
      return (
        <p className="Loading">Loading...</p>
      )
    }

    return (
      <div className="List">
        <div className="List-header">
          <ListSummary results={5} location={this.state.location} />
          <ListSort sortFilters={this.state.sortFilters} setSortMethod={this.setSortMethod} />
        </div>

        {_(this.state.hotels)
          .sortBy(sortMethods[this.state.sortMethod])
          .map((hotel, i) => <ListItem key={i} {...hotel} />)
          .value()
        }
      </div>
    );
  }
}
