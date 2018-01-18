import React from 'react';
import OrderPageLayout from './OrderPageLayout.js';
import MenuComponent from './MenuComponent.js';
import OrderTableComponent from './OrderTableComponent.js';
import OrderFormComponent from './OrderFormComponent.js';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent.js';

export default function Orderpage({
  menuItems,
  customerInfo,
  itemsOrdered,
  onAddItem,
  onClose,
  onSubmitOrderForm
}) {
  return (
    <OrderPageLayout>
      <MenuComponent menuItems={menuItems} onAddItem={onAddItem} />
      <OrderTableComponent itemsOrdered={itemsOrdered} />
      {!customerInfo
        ? <OrderFormComponent submitOrderForm={onSubmitOrderForm} />
        : <OrderSuccessMessageComponent
            customerInfo={customerInfo}
            closeOrderSuccessMessage={onClose}
          />}
    </OrderPageLayout>
  );
}
