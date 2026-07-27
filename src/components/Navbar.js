import { Link, useLocation } from "react-router-dom";

export default function Navbar({ count }) {
  const { pathname } = useLocation();

  const isActive = path => pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="wordmark">
        Core Collection
      </Link>

      <div className="nav-links">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <Link to="/shop" className={isActive("/shop") ? "active" : ""}>
          Shop
        </Link>
        <Link to="/login" className={isActive("/login") ? "active" : ""}>
          Account
        </Link>
        <Link to="/cart" className="cart-link">
          Bag
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </nav>
  );
}
