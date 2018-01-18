import React from 'react';

export default function OrderPageLayout(props) {
  return (
    //=========HEADER=========
    <div>
      <nav className="blue">
        <div className="nav-wrapper">
          <a className="brand-logo">Galvanize Delivers </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="order.html">Order Delivery</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="OrderPageLayout">
        <div className="leftColumn">
          {/* <div class="row"> */}
          <div className="col s12 m6">
            {props.children[0]}
          </div>
          <div className="rightColumn">
            {props.children[1]}
            {props.children[2]}
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* <div>
        <div className="OrderPageLayout">
          <div className="leftColumn">
            <h4>Menu</h4>
            {props.children[0]}
          </div>
          <div className="rightColumn">
            <h4>Order</h4>
            {props.children[1]}
            {props.children[2]}
          </div>
        </div>
      </div> */}

      <footer className="page-footer blue">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Galvanize Delivers</h5>
              <p className="grey-text text-lighten-4">
                Free Dining. Delivered.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>

              <ul>
                <li>
                  <a className="white-text" href="index.html">
                    Home{' '}
                  </a>
                </li>
                <li>
                  <a className="white-text" href="order.html">
                    Order Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2016 Galvanize Delivers</div>
        </div>
      </footer>
    </div>
  );
}
