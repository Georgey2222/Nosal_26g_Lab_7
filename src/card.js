import React from 'react';
function ProductCard({ product })
{
    return 
    (<div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.author}</p>
      <span className="type">{product.type}</span>
      <p>${product.price}</p>
      <p>Quantity in stock: {product.stock}</p>
      <button>Add to cart</button>
    </div>)
}
export default ProductCard;