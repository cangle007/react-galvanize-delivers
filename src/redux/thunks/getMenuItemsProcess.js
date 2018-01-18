import getMenuItems from '../../api/getMenuItems.js';

export default function getMenuItemsProcess() {
  return (dispatch, getState, env) => {
    return getMenuItems().then(menuItems => {
      dispatch({ type: 'GET_MENU_ITEMS', menuItems });
      return menuItems;
    });
  };
}
