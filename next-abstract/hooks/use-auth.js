"use client";
import { useState } from "react";
import { login as apiLogin } from "../api/auth";
import { useAuthContext } from "../contexts/auth-context";

export function useAuth() {
  const { user, login: setUser, logout } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const userObj = await apiLogin(username, password);
      setUser(userObj);
      return userObj;
    } catch (err) {
      setError(err.message || "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { user, login, logout, error, loading };
}
