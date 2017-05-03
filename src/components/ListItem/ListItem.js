import React from 'react';
import _ from 'lodash';

import Thumbnail from '../Thumbnail';
import Summary from '../Summary';
import Pricing from '../Pricing';
import './ListItem.css';

const SELF_RATING_TYPE = 'self';

export default ({
  image,
  promotion,
  address,
  rating,
  rating_type,
  title,
  rooms,
}) => {
  const {
    free_cancellation,
    name,
    currency,
    points_earned,
    price,
    savings,
  } = _.first(rooms);

  return (
    <div className="ListItem">
      <Thumbnail
        image={image}
        promotion={promotion}
      />

      <Summary
        address={address}
        cancellation={free_cancellation}
        rating={rating}
        selfRated={rating_type === SELF_RATING_TYPE}
        title={title}
        type={name}
      />

      <Pricing
        currency={currency}
        points={points_earned}
        price={price}
        savings={savings}
      />
    </div>
  );
};
