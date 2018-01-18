import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPageLayout from './OrderPageLayout.js';
import MenuComponent from './MenuComponent.js';
import MenuItemComponent from './MenuItemComponent.js';
import OrderTableComponent from './OrderTableComponent.js';
import OrderFormComponent from './OrderFormComponent.js';

storiesOf('OrderPageLayout', module).add('OrderPageLayout path', () =>
  <OrderPageLayout>
    <MenuComponent menuItems={data.menuComponent} />
    <OrderTableComponent itemsOrdered={data.orderTableComponent} />
    <OrderFormComponent input={data.orderFormComponent} />
  </OrderPageLayout>
);

let data = {
  menuComponent: [
    {
      id: 101,
      name: 'Some Item A',
      price: 9.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 102,
      name: 'Some Item B',
      price: 8.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 103,
      name: 'Some Item C',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 104,
      name: 'Some Item D',
      price: 6.99,
      imagePath: '//via.placeholder.com/300x200'
    }
  ],
  orderTableComponent: [
    {
      id: 101,
      name: 'Some Item A',
      price: 9.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 102,
      name: 'Some Item B',
      price: 8.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 103,
      name: 'Some Item C',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 104,
      name: 'Some Item D',
      price: 6.99,
      imagePath: '//via.placeholder.com/300x200'
    }
  ],
  orderFormComponent: [
    {
      name: 'Nestor Toro',
      phone: '(650) 533-8676',
      address: '123 Main Street, Oakland, CA'
    }
  ]
};
