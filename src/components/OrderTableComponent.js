import React from 'react';

export default function OrderTableComponent({ itemsOrdered }) {
  const getSubtotal = function() {
    if (itemsOrdered.length !== 0) {
      let array = itemsOrdered.map(element => element.price);
      let result = array.reduce((pre, curr) => pre + curr);
      return '$' + result;
    } else {
      return 0;
    }
  };

  const tax = 0;
  const totalAmount = getSubtotal() + tax;

  return (
    <div className="col s12 m4">
      <h4>YOUR ORDER</h4>
      <table id="order-table" className="striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {itemsOrdered.map(item =>
            <tr>
              <td>
                {item.name}
              </td>
              <td>
                {item.price}
              </td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>
            <td />
            <td>SUB-TOTAL</td>
            <td />
            <td id="subTotal">
              {getSubtotal(itemsOrdered)}
            </td>
          </tr>
          <tr>
            <td />
            <td>TAX</td>
            <td />
            <td id="tax">
              {'$' + tax.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td />
            <td>TOTAL</td>
            <td />
            <td id="total">
              {totalAmount}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
