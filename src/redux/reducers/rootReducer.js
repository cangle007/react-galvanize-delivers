export default function rootReducer(
  currentState = {
    menuItems: [],
    customerInfo: null,
    itemsOrdered: []
  },
  action
) {
  switch (action.type) {
    case 'GET_MENU_ITEMS':
      return { ...currentState, menuItems: action.menuItems };

    case 'ADD_ORDER_ITEM':
      const menuItem = currentState.menuItems.find(
        item => item.id === action.itemId
      );
      return {
        ...currentState,
        itemsOrdered: [...currentState.itemsOrdered, menuItem]
      };

    case 'SUBMIT_ORDER':
      return { ...currentState, customerInfo: action.customerInfo };

    case 'CLOSE_ORDER':
      return { ...currentState, customerInfo: null };

    default:
      return currentState;
  }
}
