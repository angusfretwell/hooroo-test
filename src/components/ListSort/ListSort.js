import React from 'react';

import './ListSort.css'

export default () => (
  <form>
    <label className="ListSort-label">Sort by</label>

    <select className="ListSort-select">
      <option>Top Deals</option>
      <option>Price (high–low)</option>
      <option>Price (low–high)</option>
      <option>Name (A–Z)</option>
    </select>
  </form>
);
