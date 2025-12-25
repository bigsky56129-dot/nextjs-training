"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/use-auth";
import "../../login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(username, password);
    if (user) {
      router.push("/clients");
    }
  };

  return (
    <div className="admin-login-bg">
      <div className="admin-login-card">
        <div className="admin-login-title">Sign in to platform</div>
        <form onSubmit={handleSubmit}>
          <label className="admin-login-label" htmlFor="login-username">Username or Email</label>
          <input
            id="login-username"
            className="admin-login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
            autoComplete="username"
            placeholder="Enter your username or email"
          />
          <label className="admin-login-label" htmlFor="login-password">Your password</label>
          <input
            id="login-password"
            className="admin-login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="Enter your password"
          />
          {error && <div className="admin-login-error">{error}</div>}
          <button className="admin-login-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="admin-login-links">
            <a href="#" className="admin-login-link">Forgot password?</a>
            <a href="#" className="admin-login-link">Sign-up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
