import React, { Component } from 'react';

import './Header.css';
import logo from './logo.svg';

export default () => (
  <div className="Header">
    <img src={logo} className="Header-logo" />
  </div>
);
