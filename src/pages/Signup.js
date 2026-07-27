import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="section auth">
      <p className="eyebrow">Join Core Collection</p>
      <h2>Create Account</h2>

      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" required />
        </label>

        <button className="btn primary btn-block" type="submit">
          Create Account
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </section>
  );
}
