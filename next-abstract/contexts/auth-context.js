"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("authUser");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const login = (userObj) => {
    setUser(userObj);
    if (typeof window !== "undefined") {
      localStorage.setItem("authUser", JSON.stringify(userObj));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("authUser");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
