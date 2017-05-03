import React from 'react';

import './ListSummary.css';

export default ({ results, location }) => (
  <p className="ListSummary">
    <strong>{results}</strong> hotels in <strong>{location}</strong>.
  </p>
);
