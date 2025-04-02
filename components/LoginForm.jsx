import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to home
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
   
    const adminEmail = "admin@test.com";
    const adminPassword = "test123";

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/"); // Redirect to Home
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mt-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded mt-4"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
