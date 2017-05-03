import React from 'react';
import { shallow } from 'enzyme';

import ListSummary from '../ListSummary';

describe('<ListSummary />', () => {
  it('renders a search summary', () => {
    const wrapper = shallow(<ListSummary location="Melbourne" results={10} />);
    expect(wrapper.text()).toBe('10 hotels in Melbourne.');
  });
});
