import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users from localStorage or initialize as an empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists in the users array
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      alert("User already exists! Please login.");
      return;
    }

    // Add new user to the users array
    users.push({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    // Store updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Redirecting to login...");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="p-6 md:p-12 lg:p-16 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/3 flex items-center justify-center p-8">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded mt-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded mt-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded mt-4"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded mt-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="w-2/3 bg-gray-200">
        <img
          src="bk8.jpeg"
          alt="Signup Visual"
          className="h-full w-full object-cover filter brightness-90"
        />
      </div>
    </div>
  );
};

export default SignupPage;
