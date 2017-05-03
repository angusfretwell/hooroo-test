import React from 'react';
import { shallow } from 'enzyme';

import Pricing from '../Pricing';

describe('<Pricing />', () => {
  it('renders the currency', () => {
    const wrapper = shallow(<Pricing currency="AUD" />);
    expect(wrapper.find('.Pricing-label').text()).toBe('1 night total (AUD)');
  });

  it('renders the price', () => {
    const wrapper = shallow(<Pricing price="$100" />);
    expect(wrapper.find('.Pricing-price').text()).toBe('$100');
  });

  it('renders the discount', () => {
    expect(shallow(<Pricing savings="$50~" />).text()).toMatch('Save $50~');
    expect(shallow(<Pricing savings="0" />).text()).not.toMatch('Save');
  });

  it('renders the points', () => {
    expect(shallow(<Pricing points="100" />).text()).toMatch('Earn 100 Quantas points');
    expect(shallow(<Pricing points="0" />).text()).not.toMatch('Qantas points');
  });
});
