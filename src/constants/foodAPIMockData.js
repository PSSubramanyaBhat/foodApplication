import imagePath from './imagePath';
export default [
  {
    id: 1,
    categoryName: 'Burger',
    menu: [
      {
        itemId: 1,
        itemName: 'Sub Sandwich',
        type: 'Fastfood',
        rating: 4.5,
        cost: '15.50',
        image: imagePath.subSandwichImage,
      },
      {
        itemId: 2,
        itemName: 'Cheese Burger',
        type: 'Fastfood',
        rating: 4.5,
        cost: '13.00',
        image: imagePath.burgerImage,
      },
      {
        itemId: 3,
        itemName: 'Potato Fries',
        type: 'Fastfood',
        rating: 4.5,
        cost: '12.00',
        image: imagePath.potatoFries,
      },
      {
        itemId: 4,
        itemName: 'French Fries',
        type: 'Fastfood',
        rating: 4.5,
        cost: '12.50',
        image: imagePath.frenchFries,
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Pizza',
  },
  {
    id: 3,
    categoryName: 'Dessert',
  },
  {
    id: 4,
    categoryName: 'Fries',
  },
  {
    id: 5,
    categoryName: 'Drinks',
  },
];
