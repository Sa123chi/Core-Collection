import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Cart({ cart, removeFromCart, changeQty }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleProceedToPay = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    // fake payment delay
    setTimeout(() => {
      alert("Payment Successful 🎉");

      setLoading(false);

      // redirect home
      navigate("/");
    }, 2000);
  };

  return (
    <div className="section cart-page">

      <h2 className="section-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items in cart.</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-row" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>

                <div className="qty">
                  <button onClick={() => changeQty(item.id, -1)}>-</button>
                  <span style={{ margin: "0 12px" }}>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)}>+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* ORDER SUMMARY */}
          <div className="summary">

            <h3>Order Summary</h3>

            <p>Total Items: {cart.length}</p>
            <h2>Total: ₹{total}</h2> 

            <button
              className="btn"
              onClick={handleProceedToPay}
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Pay"}
            </button>

          </div>
        </>
      )}
    </div>
  );
}
