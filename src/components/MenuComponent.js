import React from 'react';
import MenuItemComponent from './MenuItemComponent.js';

export default function MenuComponent({ menuItems, onAddItem }) {
  return (
    <div className="MenuComponent">
      {menuItems.map(item =>
        <MenuItemComponent
          key={item.id}
          menuItems={item}
          onAddItem={onAddItem}
        />
      )}
    </div>
  );
}
