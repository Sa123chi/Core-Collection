import { Link } from "react-router-dom";
import products from "../data/products";

export default function Categories() {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <section className="section">
      <h2 className="section-title">Shop by Category</h2>

      <div className="category-grid">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/shop/${cat}`}
            className="category-card"
          >
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  );
}
