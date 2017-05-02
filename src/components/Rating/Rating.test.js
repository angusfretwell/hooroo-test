import React from 'react';
import { shallow } from 'enzyme';

import Rating from '../Rating';

describe('<Rating />', () => {
  it('renders stars', () => {
    expect(shallow(<Rating />).find('.fa-star').length).toBe(5);
  });

  it('renders circles when the rating is self rated', () => {
    expect(shallow(<Rating selfRated />).find('.fa-circle').length).toBe(5);
  });

  it('renders the correct number of full and empty stars', () => {
    const wrapper = shallow(<Rating rating={3} />);
    expect(wrapper.find('.Rating-item').length).toBe(5);
    expect(wrapper.find('.Rating-item-full').length).toBe(3);
    expect(wrapper.find('.Rating-item-empty').length).toBe(2);
  });

  it('renders a half star when the rating is a half', () => {
    const wrapper = shallow(<Rating rating={2.5} />);
    expect(wrapper.find('.Rating-item').length).toBe(5);
    expect(wrapper.find('.Rating-item-half').length).toBe(1);
    expect(wrapper.find('.Rating-item-full').length).toBe(2);
    expect(wrapper.find('.Rating-item-empty').length).toBe(2);
  });
});
