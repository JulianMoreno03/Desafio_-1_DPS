'use client'
import { products } from '@/app/data';
import React from 'react';
import '../app/page.module.css'




const Products = ({ onAddToCart }) => {
    const renderProducts = () => {
      return products.map((product, index) => (
        <div className="product-box" key={index}>
        <div className="product">
          <div className="product-image">
            <img src={product.image} className='img' alt={product.name} />
          </div>
          <div className="product-details">
            <h5 className="product-name">{product.name}</h5>
            <p className="product-description">{product.descripcio}</p>
            <p className="product-price">Precio: ${product.price}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="products-container">
      {renderProducts()}
    </div>
  );
};

export default Products;