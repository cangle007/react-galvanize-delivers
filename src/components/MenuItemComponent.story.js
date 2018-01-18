import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import './MenuItemComponent.story.css';

let data = {
  id: 101,
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

storiesOf('MenuItemComponent', module).add('Complete item passed in', () =>
  <MenuItemComponent item={data} onAddItem={itemId => console.log(data.id)} />
);
