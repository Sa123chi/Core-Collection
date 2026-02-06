import { useParams } from "react-router-dom";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function CategoryProducts({ addToCart }) {
  const { category } = useParams();

  const filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  return (
    <section className="section">
      <h2 className="section-title">
        {category.toUpperCase()} Products
      </h2>

      <div className="grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt="" />

            <h3>{p.name}</h3>
            <p>${p.price}</p>

            <div className="btn-row">
              <Link to={`/product/${p.id}`} className="btn outline">
                View
              </Link>

              <button
                className="btn primary"
                onClick={() => addToCart(p)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
