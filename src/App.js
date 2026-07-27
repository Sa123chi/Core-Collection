import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("core-collection-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("core-collection-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size) => {
    setCart(prev => {
      const key = `${product.id}-${size}`;
      const exists = prev.find(p => p.key === key);

      if (exists) {
        return prev.map(p =>
          p.key === key ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, size, key, qty: 1 }];
    });
  };

  const removeFromCart = key => {
    setCart(prev => prev.filter(p => p.key !== key));
  };

  const changeQty = (key, amount) => {
    setCart(prev =>
      prev.map(p =>
        p.key === key
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

        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} />}
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
