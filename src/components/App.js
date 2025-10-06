import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const initialProducts = [
  { id: 1, name: "iPhone 14", description: "Latest iPhone.", image: "https://via.placeholder.com/100?text=iPhone14", price: 799 },
  { id: 2, name: "Galaxy S22", description: "Latest Samsung.", image: "https://via.placeholder.com/100?text=GalaxyS22", price: 699 },
  { id: 3, name: "Pixel 7", description: "New Google Pixel.", image: "https://via.placeholder.com/100?text=Pixel7", price: 599 },
  { id: 4, name: "OnePlus 10", description: "Popular OnePlus.", image: "https://via.placeholder.com/100?text=OnePlus10", price: 499 },
  { id: 5, name: "Moto G100", description: "Motorola phone.", image: "https://via.placeholder.com/100?text=MotoG100", price: 399 },
  { id: 6, name: "Oppo Find X5", description: "Oppo flagship.", image: "https://via.placeholder.com/100?text=OppoX5", price: 549 },
  { id: 7, name: "Xiaomi Mi 12", description: "Affordable Xiaomi.", image: "https://via.placeholder.com/100?text=Mi12", price: 429 },
  { id: 8, name: "Sony Xperia 1", description: "Sony flagship.", image: "https://via.placeholder.com/100?text=Xperia1", price: 999 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const addProduct = (prod) => setProducts([...products, { ...prod, id: Date.now() }]);
  const editProduct = (updated) =>
    setProducts(products.map(p => (p.id === updated.id ? updated : p)));
  const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Product List</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/admin" element={<AdminPanel products={products} addProduct={addProduct} editProduct={editProduct} deleteProduct={deleteProduct} />} />
        <Route path="/admin/products/:id" element={<ProductDetails products={products} isAdmin editProduct={editProduct} />} />
      </Routes>
    </Router>
  );
}

export default App;
