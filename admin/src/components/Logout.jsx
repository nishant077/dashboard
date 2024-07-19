// AdminLogin.jsx

import React, { useState } from 'react';
import logo from './../assets/freedom.JPG'; // Adjust the path to your logo
 // Example path to a lock icon SVG

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData); // For demonstration, logging form data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-20" /> {/* Adjust height as needed */}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-[#9A1D20] text-center">Admin Panel Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#833738] hover:bg-[#9A1D20] text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300 focus:outline-none focus:shadow-outline"
          >
            Login
            {/* Lock icon */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
