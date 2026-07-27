import { Link } from "react-router-dom";
import products from "../data/products";

export default function Home() {
  const featured = products.filter(p => p.tag === "New Arrival").slice(0, 3);

  return (
    <>
      <section className="hero">
        <p className="eyebrow">FW26 — ONE COLLECTION, NO NOISE</p>
        <h1>
          Your wardrobe's <em>core</em>, cut to last.
        </h1>
        <p className="hero-sub">
          No seasons of noise, no fifty categories. One fashion line,
          cut well, worn on repeat — raw hems, hand-finished buttons,
          fabric chosen to age instead of wear out.
        </p>
        <Link to="/shop" className="btn primary">
          Shop the Collection
        </Link>
      </section>

      <section className="section">
        <div className="stitch-divider" />
        <p className="eyebrow center">Just In</p>

        <div className="grid grid--3">
          {featured.map(p => (
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
      </section>

      <section className="section note-section">
        <div className="stitch-divider" />
        <p className="care-note">
          <span className="care-note__label">A NOTE ON CARE</span>
          Every piece here is made to be repaired, not replaced. Cold wash,
          line dry, mend the seam before you retire the garment.
        </p>
      </section>
    </>
  );
}
