import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-12 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Sign Up
        </h2>

        <form>
          <div className="mb-6">
            <label className="block text-gray-600 text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 text-lg rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-600 text-lg text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
