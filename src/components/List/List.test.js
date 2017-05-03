import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';
import ListSummary from '../ListSummary';
import ListItem from '../ListItem';
import ListSort from '../ListSort';
import data from '../../data.json';

describe('<List />', () => {
  describe('#setSortMethod', () => {
    it('sets the sort mehtod', () => {
      const wrapper = shallow(<List />);
      expect(wrapper.state().sortMethod).toBe('default');
      wrapper.instance().setSortMethod('top-deals');
      expect(wrapper.state().sortMethod).toBe('topDeals');
    });
  });

  describe('#render', () => {
    it('renders loading message when hotels is empty', () => {
      expect(shallow(<List />).text()).toBe('Loading...');
    });

    it('renders <ListSummary /> with the number of results and location', () => {
      const wrapper = shallow(<List />);
      wrapper.setState({ location: 'Melbourne', hotels: data.hotels });
      expect(wrapper.find(ListSummary).props()).toEqual({
        location: 'Melbourne',
        results: 5,
      });
    });

    it('renders <ListSort /> the available filters and setSortMethod', () => {
      const wrapper = shallow(<List />);
      wrapper.setState({ sortFilters: data.sort_filters, hotels: data.hotels });
      expect(wrapper.find(ListSort).props()).toEqual({
        setSortMethod: wrapper.instance().setSortMethod,
        sortFilters: data.sort_filters,
      });
    });

    it('renders a <ListItem /> for each hotel', () => {
      const wrapper = shallow(<List />);
      wrapper.setState({ location: 'Melbourne', hotels: data.hotels });
      expect(wrapper.find(ListItem).length).toBe(5);
    });
  });
});
