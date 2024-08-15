import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg px-3 py-6 mt-auto h-full">
      <div className="flex flex-col items-center text-center">
        <div className="w-fullmd:w-[200px] flex items-center mb-4">
          <Link to={'/'} className="text-red-600 text-2xl font-bold cursor-pointer">
            NB<span className="text-blue-700">tech</span>
          </Link>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-8 mb-4">
          <Link to="/" className="text-gray-800 hover:text-blue-700">Home</Link>
          <Link to="/products" className="text-gray-800 hover:text-blue-700">Products</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-700">About Us</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-700">Contact Us</Link>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NBtech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
