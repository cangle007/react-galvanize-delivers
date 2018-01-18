import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent.js';

storiesOf('OrderFormComponent', module).add('Form path', () =>
  <OrderFormComponent
    input={[
      {
        name: 'Nestor Toro',
        phone: '(650) 533-8676',
        address: '123 Main Street, Oakland, CA'
      }
    ]}
  />
);
