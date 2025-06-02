import React from 'react';
import './Card.css'
function Card({ product })
{
    return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.author}</p>
      <span className="type">{product.category}</span>
      <p>${product.price}</p>
      <p>Quantity in stock: {product.stock}</p>
      <button>Add to cart</button>
    </div>)
}
export default Card;