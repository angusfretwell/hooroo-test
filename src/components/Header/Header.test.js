import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('renders the logo', () => {
    expect(shallow(<Header />).find('img').props()).toMatchObject({
      alt: 'Qantas',
      src: 'logo.svg',
    });
  });
});
