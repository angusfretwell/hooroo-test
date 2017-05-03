import React from 'react';
import _ from 'lodash';

import './Rating.css';

const className = (rating, index) => {
  if (index < rating - 0.5) return 'Rating-item-full';
  if (index < rating) return 'Rating-item-half';
  return 'Rating-item-empty';
};

const ratings = (rating, selfRated) => _.range(5).map(index =>
  <span
    key={index}
    className={`
      Rating-item ${className(rating, index)}
      fa fa-${selfRated ? 'circle' : 'star'}
    `}
  />,
);

export default ({ rating, selfRated }) => (
  <div>
    {ratings(rating, selfRated)}
  </div>
);
