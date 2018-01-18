import rootReducer from './rootReducer.js';
//jest.mock('../../api/getMenuItems');
import data from '../../mock-data/mock-data';

describe('rootReducer', () => {
  it('action.type GET_MENU_ITEMS', () => {
    const action = {
      type: 'GET_MENU_ITEMS',
      menuItems: [...data.menuItems]
    };
    const currentState = {
      menuItems: [],
      itemsOrdered: [],
      customerInfo: null
    };
    const nextState = {
      menuItems: action.menuItems,
      itemsOrdered: [],
      customerInfo: null
    };
    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
