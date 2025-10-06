import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPanel({ products, addProduct, editProduct, deleteProduct }) {
  const [formData, setFormData] = useState({ name: "", description: "", image: "", price: "" });
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    addProduct({ ...formData, price: Number(formData.price) });
    setFormData({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleAdd}>
        <input className="form-control" type="text" placeholder="Name" value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input className="form-control" type="text" placeholder="Description" value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })} />
        <input className="form-control" type="text" placeholder="Image URL" value={formData.image}
          onChange={e => setFormData({ ...formData, image: e.target.value })} />
        <input className="form-control" type="number" placeholder="Price" value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })} />
        <button>Add</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name} - ₹{product.price}</span>
            <button className="float-right delete-btn" onClick={() => deleteProduct(product.id)} style={{ marginLeft: 6 }}>
              Delete
            </button>
            <button className="float-right edit-btn" onClick={() => navigate(`/admin/products/${product.id}`)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
