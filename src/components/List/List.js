import React from 'react';

import ListSummary from '../ListSummary';
import ListSort from '../ListSort';
import './List.css'

export default () => (
  <div className="List">
    <div className="List-header">
      <ListSummary results={5} location="Sydney" />
      <ListSort />
    </div>
  </div>
);
