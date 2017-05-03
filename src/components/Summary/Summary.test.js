import React from 'react';
import { shallow } from 'enzyme';

import Summary from '../Summary';
import Rating from '../Rating';

describe('<Summary />', () => {
  it('renders the title', () => {
    const wrapper = shallow(<Summary title={'Example'} />);
    expect(wrapper.find('h2').text()).toBe('Example');
  });

  it('renders the address', () => {
    const wrapper = shallow(<Summary address={'123 Collins St, Melbourne'} />);
    expect(wrapper.find('address').text()).toBe('123 Collins St, Melbourne');
  });

  it('renders the type', () => {
    const wrapper = shallow(<Summary type={'Deluxe King'} />);
    expect(wrapper.find('.Summary-type').text()).toBe('Deluxe King');
  });

  it('renders free cancellation message if cancellation is truthy', () => {
    expect(shallow(<Summary cancellation />).text()).toMatch('Free cancellation');
    expect(shallow(<Summary />).text()).not.toMatch('Free cancellation');
  });

  it('renders <Rating /> with the correct props', () => {
    expect(shallow(<Summary rating={5} selfRated />).find(Rating).props()).toEqual({
      rating: 5,
      selfRated: true
    });
  });
});
