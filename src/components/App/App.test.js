import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../Header';
import List from '../List';

describe('<App />', () => {
  it('renders a <Header />', () => {
    expect(shallow(<App />).find(Header).length).toBe(1);
  });

  it('renders a <List />', () => {
    expect(shallow(<App />).find(List).length).toBe(1);
  });
});
