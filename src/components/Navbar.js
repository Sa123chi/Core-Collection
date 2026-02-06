import { Link } from "react-router-dom";

export default function Navbar({ count }) {
  return (
    <nav className="navbar">
      <h2>Core Collection</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Shop</Link>
        <Link to="/cart">Cart ({count})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
