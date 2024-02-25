'use client'
import React, { useState } from 'react';
import Header from '../components/Headers';
import Products from '../components/ProductsList';
import '../app/page.module.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  //funcion para calcular el total :)
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="App">
    <Header onToggleCart={() => setShowCart(!showCart)} /> 
    <main className="main-container">
      <Products onAddToCart={addToCart} />
      {showCart && (
        <div className="cart-sidebar"> 
          <div className="cart">
            <h2>Carrito de Compras</h2>
            <ul>
              {cart.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price}
                  <button className="btn-eliminar"onClick={() => removeFromCart(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <p>Total a pagar: ${calculateTotal()}</p>
          </div>
        </div>
      )}
    </main>
  </div>
  );
};

export default App;