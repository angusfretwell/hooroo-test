import React from 'react';
import _ from 'lodash';

import './ListSort.css'

export default ({ sortFilters }) => (
  <form>
    <label className="ListSort-label">Sort by</label>

    <select className="ListSort-select">
      {_(sortFilters).mapValues((label, value, index) =>
        <option value={value} key={value}>{label}</option>
      ).toArray().value()}
    </select>
  </form>
);
