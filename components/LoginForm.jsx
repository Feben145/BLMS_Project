import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validEmail = "user@example.com";
  const validPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-2 md:p-6 lg:p-8 min-h-screen flex items-center justify-center">
    <div className="flex h-screen gap-x-10">
          
       <div className="w-1/3 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 justify-center ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <p className="text-center mt-4 text-gray-600">
  Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
</p>
        </form>
      </div>
    </div>
    <div className="w-2/3 bg-gray-200">
        <img
          src="bk7.jpeg"
          alt="Login Visual"
          className="h-full w-full object-cover filter brightness-90"
        />
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
