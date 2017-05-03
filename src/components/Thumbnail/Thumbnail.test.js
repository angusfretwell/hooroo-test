import React from 'react';
import { shallow } from 'enzyme';

import Thumbnail from '../Thumbnail';

describe('<Thumbnail />', () => {
  it('renders the promotion label', () => {
    expect(shallow(<Thumbnail promotion={'Red Hot'} />).text()).toBe('Red Hot');
  });

  it('renders the image', () => {
    const wrapper = shallow(<Thumbnail image={'//example.com/image.jpg'} />);
    expect(wrapper.find('img').props().src).toBe('//example.com/image.jpg');
  });
});
