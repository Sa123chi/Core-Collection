import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [size, setSize] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="section">
        <p>We couldn't find that piece.</p>
        <Link to="/shop" className="btn primary">
          Back to Shop
        </Link>
      </section>
    );
  }

  const handleAdd = () => {
    if (!size) return;
    addToCart(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section className="section product-page">
      <div className="product-media product-media--large">
        <img src={product.image} alt={product.name} />
        {product.tag && <span className="tag">{product.tag}</span>}
      </div>

      <div className="product-detail">
        <p className="eyebrow">{product.type.toUpperCase()}</p>
        <h1>{product.name}</h1>
        <p className="price price--large">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
        <p className="desc">{product.desc}</p>

        <div className="care-label">
          <span className="care-label__row">
            <span>MATERIAL</span> {product.material}
          </span>
          <span className="care-label__row">
            <span>CARE</span> Cold wash, line dry
          </span>
        </div>

        <p className="size-label">Size</p>
        <div className="size-row">
          {product.sizes.map(s => (
            <button
              key={s}
              className={`size-chip ${size === s ? "is-active" : ""}`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          className="btn primary btn-block"
          onClick={handleAdd}
          disabled={!size}
        >
          {added ? "Added to Bag" : size ? "Add to Bag" : "Select a Size"}
        </button>

        <button className="btn ghost btn-block" onClick={() => navigate("/cart")}>
          View Bag
        </button>
      </div>
    </section>
  );
}
