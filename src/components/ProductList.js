import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h2>Mobile Store Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} width="64" />
              <span>{product.name} - ₹{product.price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
