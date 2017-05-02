import React from 'react';

import Thumbnail from '../Thumbnail';
import Summary from '../Summary';
import Pricing from '../Pricing';
import './ListItem.css'

export default () => (
  <div className="ListItem">
    <Thumbnail />
    <Summary />
    <Pricing />
  </div>
);
