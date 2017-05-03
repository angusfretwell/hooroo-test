import React from 'react';
import _ from 'lodash';

import './ListSort.css';

export default ({ sortFilters, setSortMethod }) => (
  <form>
    <label className="ListSort-label">Sort by</label>

    <select className="ListSort-select" onChange={event => setSortMethod(event.target.value)}>
      {_(sortFilters).mapValues((label, value) =>
        <option value={value} key={value}>{label}</option>,
      ).toArray().value()}
    </select>
  </form>
);
