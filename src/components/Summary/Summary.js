import React from 'react';

import Rating from '../Rating';
import './Summary.css';

export default () => (
  <div className="Summary">
    <div>
      <h2 className="Summary-title">Primus Hotel Sydney</h2>
      <address className="Summary-address">339 Pitt St, Sydney</address>
    </div>

    <Rating rating={3} />

    <p className="Summary-type">Deluxe king</p>
    <p className="Summary-cancellation">
      <i className="fa fa-check-square-o"></i> Free cancellation
    </p>
  </div>
);
