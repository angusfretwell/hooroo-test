import React from 'react';

import ListSummary from '../ListSummary';
import ListSort from '../ListSort';
import ListItem from '../ListItem';
import './List.css'

export default () => (
  <div className="List">
    <div className="List-header">
      <ListSummary results={5} location="Sydney" />
      <ListSort />
    </div>

    {[...Array(5).keys()].map(i => <ListItem key={i} />)}
  </div>
);
