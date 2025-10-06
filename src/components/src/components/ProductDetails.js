import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products, isAdmin = false, editProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === id);
  const [price, setPrice] = useState(product ? product.price : "");

  if (!product) return <div>Product not found.</div>;

  const handleSave = () => {
    editProduct({ ...product, price: Number(price) });
    navigate(isAdmin ? "/admin" : `/products/${product.id}`);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} width="100" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      {isAdmin && (
        <div>
          <input className="form-control" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Edit Price" />
          <button className="float-right" onClick={handleSave}>Save</button>
        </div>
      )}
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ProductDetails;
