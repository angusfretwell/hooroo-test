import React from 'react';

import './Pricing.css';

export default () => (
  <div className="Pricing">
    <div>
      <p className="Pricing-label"><strong>1</strong> night total (AUD)</p>
      <p className="Pricing-price">$375</p>
    </div>
    <p className="Pricing-discount">Save $30</p>
    <p className="Pricing-points">
      Earn <strong>2250</strong> Quantas points
    </p>
  </div>
);
