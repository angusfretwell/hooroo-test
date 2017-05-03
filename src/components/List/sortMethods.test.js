import _ from 'lodash';

import { priceAsc, priceDesc, nameAsc, topDeals } from './sortMethods';

const FIXTURES = [{
  title: 'Courtyard by Marriott Sydney-North Ryde',
  rooms: [{
    price: '$329',
    savings: '$30~',
    points_earned: '0',
  }],
}, {
  title: 'Primus Hotel Sydney',
  rooms: [{
    price: '$375',
    savings: '$28',
    points_earned: '2250',
  }],
}, {
  title: 'Rydges World Square Sydney',
  rooms: [{
    price: '$227',
    savings: '0',
    points_earned: '831',
  }],
}, {
  title: 'PARKROYAL Darling Harbour Sydney',
  rooms: [{
    price: '$535',
    savings: '0',
    points_earned: '0',
  }],
}, {
  title: 'Metro Hotel Marlow Sydney Central',
  rooms: [{
    price: '$295',
    savings: '0',
    points_earned: '1770',
  }],
}];

describe('#priceAsc', () => {
  it('sorts by price (low-high)', () => {
    expect(_.sortBy(FIXTURES, priceAsc)).toMatchObject([
      { rooms: [{ price: '$227' }] },
      { rooms: [{ price: '$295' }] },
      { rooms: [{ price: '$329' }] },
      { rooms: [{ price: '$375' }] },
      { rooms: [{ price: '$535' }] },
    ]);
  });
});

describe('#priceDesc', () => {
  it('sorts by price, (high-low)', () => {
    expect(_.sortBy(FIXTURES, priceDesc)).toMatchObject([
      { rooms: [{ price: '$535' }] },
      { rooms: [{ price: '$375' }] },
      { rooms: [{ price: '$329' }] },
      { rooms: [{ price: '$295' }] },
      { rooms: [{ price: '$227' }] },
    ]);
  });
});

describe('#nameAsc', () => {
  it('sorts by name (A-Z)', () => {
    expect(_.sortBy(FIXTURES, nameAsc)).toMatchObject([
      { title: 'Courtyard by Marriott Sydney-North Ryde' },
      { title: 'Metro Hotel Marlow Sydney Central' },
      { title: 'PARKROYAL Darling Harbour Sydney' },
      { title: 'Primus Hotel Sydney' },
      { title: 'Rydges World Square Sydney' },
    ]);
  });
});

describe('#topDeals', () => {
  it('sorts by discount, then points', () => {
    expect(_.sortBy(FIXTURES, topDeals)).toMatchObject([
      { rooms: [{ savings: '$30~', points_earned: '0' }] },
      { rooms: [{ savings: '$28', points_earned: '2250' }] },
      { rooms: [{ savings: '0', points_earned: '1770' }] },
      { rooms: [{ savings: '0', points_earned: '831' }] },
      { rooms: [{ savings: '0', points_earned: '0' }] },
    ]);
  });
});
