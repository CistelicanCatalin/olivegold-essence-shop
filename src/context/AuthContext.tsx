import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple hash for demo purposes
const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("olivegold-user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("olivegold-user", JSON.stringify(user));
    else localStorage.removeItem("olivegold-user");
  }, [user]);

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("olivegold-users") || "[]");
    const found = users.find((u: any) => u.email === email && u.passwordHash === simpleHash(password + "olivegold-salt"));
    if (found) { setUser({ email: found.email, name: found.name }); return true; }
    return false;
  };

  const register = (email: string, password: string, name: string): boolean => {
    const users = JSON.parse(localStorage.getItem("olivegold-users") || "[]");
    if (users.find((u: any) => u.email === email)) return false;
    users.push({ email, name, passwordHash: simpleHash(password + "olivegold-salt") });
    localStorage.setItem("olivegold-users", JSON.stringify(users));
    setUser({ email, name });
    return true;
  };

  const logout = () => setUser(null);
  const isAdmin = user?.email === "admin@livadacumaslini.ro";

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
