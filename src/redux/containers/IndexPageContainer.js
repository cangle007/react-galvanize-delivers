import { connect } from 'react-redux'; //the curly bracket means you are importing multiple modules
import { compose, lifecycle } from 'recompose';

import OrderPage from '../../components/OrderPage';
import getMenuItemsProcess from '../thunks/getMenuItemsProcess';

function mapStateToProps(state, ownProps) {
  return {
    menuItems: state.menuItems,
    itemsOrdered: state.itemsOrdered,
    customerInfo: state.customerInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(getMenuItemsProcess());
    },
    onAddItem: itemId => {
      dispatch({ type: 'ADD_ORDER_ITEM', itemId });
    },
    onClose: () => {
      dispatch({ type: 'CLOSE_ORDER' });
    },
    onSubmitOrderForm: ({ name, phone, address }) => {
      dispatch({
        type: 'SUBMIT_ORDER',
        customerInfo: { name, phone, address }
      });
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, withlifecycle)(OrderPage);
