import React from 'react';

export default function MenuItemComponent({ menuItems, onAddItem }) {
  if (!menuItems) return null;
  const imagePath = menuItems.imagePath;
  const name = menuItems.name || 'N/A';
  const price =
    menuItems.price && typeof menuItems.price === 'number'
      ? `$${menuItems.price.toFixed(2)}`
      : 'N/A';

  function handleClicking(event) {
    event.preventDefault();
    onAddItem(menuItems.id);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col m8 s12">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="pict" src={imagePath} width="305" height="200" />
              </div>
              <div className="card-content">
                <h5 className="card-title">
                  {name}
                </h5>
                <p>
                  {price}
                </p>
              </div>
              <div className="card-action">
                <a href="." onClick={handleClicking}>
                  ADD TO ORDER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
