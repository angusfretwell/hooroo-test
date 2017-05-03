import React from 'react';
import { shallow } from 'enzyme';

import ListSort from '../ListSort';

const FILTERS = {
  'top-deals': 'Top Deals',
  'price-desc': 'Price (high-low)',
  'price-asc': 'Price (low-high)',
  'name-asc': 'Name (A-Z)'
};

const setSortMethod = jest.fn();

describe('<ListSort />', () => {
  it('renders a select with available sortFilters', () => {
    const options = shallow(<ListSort sortFilters={FILTERS} />).find('option');
    expect(options.length).toBe(4);
    expect(options.first().text()).toBe('Top Deals');
    expect(options.first().props().value).toBe('top-deals');
  });

  it('calls setSortMethod when the select changes', () => {
    const select = shallow(
      <ListSort sortFilters={FILTERS} setSortMethod={setSortMethod} />
    ).find('select');
    select.simulate('change', { target: { value: 'top-deals' }});
    expect(setSortMethod).toHaveBeenCalledWith('top-deals');
  });
});
