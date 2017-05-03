import React from 'react';

import './Thumbnail.css'

export default ({ image, promotion }) => (
  <div className="Thumbnail">
    <p className="Thumbnail-callout">
      {promotion}
    </p>

    <div className="Thumbnail-wrapper">
      <img src={image} className="Thumbnail-image" alt="" />
    </div>
  </div>
);
