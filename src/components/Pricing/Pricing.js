import React from 'react';
import _ from 'lodash';

import './Pricing.css';

const notZero = value => value && value !== '0';

export default ({ price, points, savings, currency }) => (
  <div className="Pricing">
    <div>
      <p className="Pricing-label">
        <strong>1</strong> night total ({currency})
      </p>

      <p className="Pricing-price">{price}</p>
    </div>

    {notZero(savings) && <p className="Pricing-discount">Save {savings}</p>}

    {notZero(points) && <p className="Pricing-points">
      Earn <strong>{points}</strong> Quantas points
    </p>}
  </div>
);
