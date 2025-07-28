import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ We logged in");
    navigate('/company-profile');
    
  };

  return (
    <div className="pt-[0px] flex h-[calc(100vh-0px)]"> {/* Adjusted top padding */}
      {/* Left side */}
      <div className="w-1/2 bg-green-900 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">ClimCarbon</h1>
        <p className="text-lg mb-6 text-center">
          Track carbon. Build trust. Drive change.
        </p>
        <img src="/image.png" alt="logos" className="w-40" />
      </div>

      {/* Right side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-2xl font-semibold mb-6">Welcome to ClimCarbon</h2>
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-gray-700">Username*</label>
            <input
              type="text"
              placeholder="Your username"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password*</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="text-sm text-blue-500 underline">
            Track, Measure and Report Today!
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
          >
            Login
          </button>
          <p className="text-sm text-center mt-2">
            Forgot Your password? <a href="#" className="text-blue-600 underline">Click Here</a>
          </p>
        </form>
        <button className="text-sm text-green-700 mt-4">Help</button>
      </div>
    </div>
  );
};

export default LoginPage;
