import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);

      if (exists) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const changeQty = (id, amount) => {
    setCart(prev =>
      prev.map(p =>
        p.id === id
          ? { ...p, qty: Math.max(1, p.qty + amount) }
          : p
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar count={cart.reduce((a, b) => a + b.qty, 0)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        <Route
          path="/shop/:category"
          element={<CategoryProducts addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<Product addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              changeQty={changeQty}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
