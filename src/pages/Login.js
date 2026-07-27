import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="section auth">
      <p className="eyebrow">Welcome Back</p>
      <h2>Log In</h2>

      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" required />
        </label>

        <button className="btn primary btn-block" type="submit">
          Log In
        </button>
      </form>

      <p className="auth-switch">
        New to Core Collection? <Link to="/signup">Create an account</Link>
      </p>
    </section>
  );
}
