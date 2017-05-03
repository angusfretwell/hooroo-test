import React, { Component } from 'react';

import data from '../../data.json';
import ListSummary from '../ListSummary';
import ListSort from '../ListSort';
import ListItem from '../ListItem';
import './List.css'

export default class List extends Component {
  constructor() {
   super();

   this.state = {
     sortFilters: {},
     location: '',
     hotels: [],
   };
 };

  componentDidMount() {
    // NOTE: simulate fetching data asynchronously from an API
    setTimeout(() => {
      this.setState({
        sortFilters: data.sort_filters,
        location: data.query.location,
        hotels: data.hotels
      });
    }, 150);
  }

  render() {
    return (
      <div className="List">
        <div className="List-header">
          <ListSummary results={5} location={this.state.location} />
          <ListSort />
        </div>

        {this.state.hotels.map((hotel, i) => <ListItem key={i} {...hotel} />)}
      </div>
    );
  }
}
