import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { User, LogOut } from "lucide-react";

const Account = () => {
  const { user, login, register, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const success = login(email, password);
      if (success) toast.success("Welcome back!");
      else toast.error("Invalid credentials");
    } else {
      if (password.length < 6) { toast.error("Password must be at least 6 characters"); return; }
      const success = register(email, password, name);
      if (success) toast.success("Account created successfully!");
      else toast.error("Email already in use");
    }
  };

  // Logged-in view
  if (user) {
    return (
      <main className="min-h-screen">
        <section className="bg-primary text-primary-foreground py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Welcome Back</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">{user.name}</h1>
          </motion.div>
        </section>
        <div className="container mx-auto px-4 py-16 max-w-lg">
          <div className="bg-card rounded-lg p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <User size={28} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg">{user.name}</p>
                <p className="text-sm text-muted-foreground font-sans">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => { logout(); toast.success("Logged out"); }}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 border border-border text-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-muted transition-colors"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Login/Register form
  return (
    <main className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">My Account</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">{isLogin ? "Sign In" : "Create Account"}</h1>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-md">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-lg p-8 shadow-card space-y-5"
        >
          {!isLogin && (
            <div>
              <label className="block text-sm font-sans font-bold mb-1">Full Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
          )}
          <div>
            <label className="block text-sm font-sans font-bold mb-1">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <div>
            <label className="block text-sm font-sans font-bold mb-1">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <button type="submit" className="w-full px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
          <p className="text-center text-sm font-sans text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-secondary font-bold hover:underline">
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </motion.form>
      </div>
    </main>
  );
};

export default Account;
