import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Cart({ cart, removeFromCart, changeQty }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal > 3000 ? 0 : 150;
  const total = subtotal + shipping;

  const handleProceedToPay = () => {
    if (cart.length === 0) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1600);
  };

  return (
    <div className="section cart-page">
      <p className="eyebrow">Your Bag</p>
      <h2 className="section-title">
        {cart.length === 0 ? "Empty for now" : "Ready when you are"}
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Nothing in your bag yet.</p>
          <Link to="/shop" className="btn primary">
            Browse the Collection
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-row" key={item.key}>
                <img src={item.image} alt={item.name} />

                <div className="cart-row__info">
                  <h3>{item.name}</h3>
                  <p className="material">
                    Size {item.size} · {item.material}
                  </p>
                  <p className="price">₹{item.price.toLocaleString("en-IN")}</p>

                  <div className="qty">
                    <button onClick={() => changeQty(item.key, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => changeQty(item.key, 1)}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.key)}
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="summary">
            <p className="eyebrow">Order Summary</p>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>

            <div className="stitch-divider" />

            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>

            <button
              className="btn primary btn-block"
              onClick={handleProceedToPay}
              disabled={loading}
            >
              {loading ? "Processing…" : "Checkout"}
            </button>

            <p className="fine-print">
              This is a front-end demo — no payment is actually processed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
