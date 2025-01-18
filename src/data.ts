import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Vanilla Ice Cream',
    Time: '05min',
    price: 5,
    favorite: false,
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'2',
    name: 'Chocolate Ice Cream',
    price: 20,
    Time: '05min',
    favorite: true,
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'3',
    name: 'Chocolate Chips Ice Cream',
    price: 5,
    Time: '05min',
    favorite: false,
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'4',
    name: 'Strawberry Ice Cream',
    price: 2,
    Time: '05min',
    favorite: true,
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'5',
    name: 'Pistachio Ice Cream',
    price: 11,
    Time: '05min',
    favorite: false,
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'6',
    name: 'Mango Ice Cream',
    price: 9,
    Time: '05min',
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'7',
    name: 'Blueberry Ice Cream',
    price: 12,
    Time: '05min',
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-7.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'8',
    name: 'Pineapple Ice Cream',
    price: 9,
    Time: '05min',
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-8.jpg',
    tags: ['All Products', 'Ice Cream'],
  },
  {
    id:'9',
    name: 'Pineapple Signature Drink',
    price: 9,
    Time: '10min',
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-9.png',
    tags: ['All Products', 'Ice Cream Shake'],
  },
   {
    id:'10',
    name: 'Dates Signature Drink',
    price: 9,
    Time: '10min',
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-10.png',
    tags: ['All Products', 'Ice Cream Shake'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All Products', count: 10 },
  { name: 'Ice Cream', count: 8 },
  { name: 'Ice Cream Shake', count: 2 },
]
