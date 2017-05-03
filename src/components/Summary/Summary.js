import React from 'react';

import Rating from '../Rating';
import './Summary.css';

export default ({ title, address, type, cancellation, rating, selfRated }) => (
  <div className="Summary">
    <div>
      <h2 className="Summary-title">
        {title}
      </h2>

      <address className="Summary-address">
        {address}
      </address>
    </div>

    <Rating rating={rating} selfRated={selfRated} />

    <p className="Summary-type">{type}</p>
    {cancellation && <p className="Summary-cancellation">
      <i className="fa fa-check-square-o"></i> Free cancellation
    </p>}
  </div>
);
