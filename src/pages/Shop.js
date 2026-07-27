import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const TYPES = [
  { key: "all", label: "Everything" },
  { key: "top", label: "Tops" },
  { key: "bottom", label: "Bottoms" },
  { key: "outerwear", label: "Outerwear" },
  { key: "dress", label: "Dresses" },
  { key: "accessory", label: "Accessories" },
];

export default function Shop() {
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("default");

  const items = useMemo(() => {
    let list =
      type === "all" ? products : products.filter(p => p.type === type);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [type, sort]);

  return (
    <section className="section shop-page">
      <div className="shop-header">
        <div>
          <p className="eyebrow">The Collection</p>
          <h2 className="section-title">Fashion, Full Stop.</h2>
        </div>

        <select
          className="sort-select"
          value={sort}
          onChange={e => setSort(e.target.value)}
          aria-label="Sort by"
        >
          <option value="default">Sort: Curated</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="type-filter">
        {TYPES.map(t => (
          <button
            key={t.key}
            className={`filter-chip ${type === t.key ? "is-active" : ""}`}
            onClick={() => setType(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid--4">
        {items.map(p => (
          <Link to={`/product/${p.id}`} key={p.id} className="product-card">
            <div className="product-media">
              <img src={p.image} alt={p.name} loading="lazy" />
              {p.tag && <span className="tag">{p.tag}</span>}
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="material">{p.material}</p>
              <p className="price">₹{p.price.toLocaleString("en-IN")}</p>
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <p className="empty-note">Nothing here yet — try another filter.</p>
      )}
    </section>
  );
}
