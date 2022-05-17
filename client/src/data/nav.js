export const nav = [
  {
    title: 'Product',
    subTitles: [
      {
        sub: 'List Products',
        to: '/product',
      },
      {
        sub: 'Create Product',
        to: '/product/add',
      },

      {
        sub: 'Attributes',
        to: '/product/attributes',
      },
      {
        sub: 'Brands',
        to: 'product/brands',
      },
      {
        sub: 'Categories',
        to: '/product/categories',
      },
    ],
  },
  {
    title: 'Users',
    subTitles: [
      {
        sub: 'List Users',
        to: '/user',
      },
      {
        sub: 'Create User',
        to: '/user/add',
      },
    ],
  },
  {
    title: 'Orders',
    subTitles: [
      {
        sub: 'List Orders',
        to: '/order',
      },
      {
        sub: 'Create Order',
        to: '/order/add',
      },
    ],
  },
  {
    title: 'Statistics',
    subTitles: [
      {
        sub: 'Products Stats',
        to: '/stats/product',
      },
      {
        sub: 'Users Stats',
        to: '/stats/user',
      },
      {
        sub: 'Orders Stats',
        to: '/stats/order',
      },
    ],
  },
];
