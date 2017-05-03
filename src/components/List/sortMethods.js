import parsePrice from 'parse-price';
import _ from 'lodash';

const getRoom = hotel => _.first(hotel.rooms);
const getPrice = hotel => parsePrice(getRoom(hotel).price);

export const priceAsc = hotel => getPrice(hotel);
export const priceDesc = hotel => getPrice(hotel) * -1;
export const nameAsc = 'title';
export const topDeals = [
  hotel => -parsePrice(getRoom(hotel).savings),
  hotel => getRoom(hotel).points_earned * -1
];

export default topDeals;
