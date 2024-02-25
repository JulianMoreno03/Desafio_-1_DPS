'use Client'
import React from 'react';

const Header = ({ onToggleCart }) => {
  return (
    <header className="container-header">
      <div className="header-container">
        <div className="brand-header">
          <h1 className="brand-name">Jaguar Sport</h1>
        </div>
        <div className="cart-button-container">
          <button className="btn-mostrar" onClick={onToggleCart}>Mostrar Carrito</button>
        </div>
      </div>
    </header>
  );
};

export default Header;