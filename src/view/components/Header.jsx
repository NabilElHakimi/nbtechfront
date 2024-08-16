import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import Card from "./card";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(prev => !prev);  // <--- Bascule l'état du tiroir à chaque clic
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getMenuItemClass = (path) => {
    return location.pathname === path
      ? "relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-blue-700 after:absolute after:h-1 after:w-full after:bottom-0 after:left-0 after:transition-all after:duration-300"
      : "relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-blue-700 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 shadow-lg px-3 py-3 z-50 bg-white">
        <nav className="flex justify-between xl:justify-around items-center">
          <div className="w-[130px] md:w-[200px] flex items-center">
            <Link
              to={"/"}
              className="text-red-600 text-2xl font-bold cursor-pointer"
            >
              NB<span className="text-blue-800">tech</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[100vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] md:top-auto ${
                isOpen ? "left-0" : "left-[-100%]"
              } px-5 md:py-0 py-5`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <li className={getMenuItemClass("/")}>
                  <Link to="/" onClick={handleCloseMenu}>
                    Home
                  </Link>
                </li>
                <li className={getMenuItemClass("/products")}>
                  <Link to="/products" onClick={handleCloseMenu}>
                    Products
                  </Link>
                </li>
                <li className={getMenuItemClass("/about")}>
                  <Link to="/about" onClick={handleCloseMenu}>
                    About Us
                  </Link>
                </li>
                <li className={getMenuItemClass("/contact")}>
                  <Link to="/contact" onClick={handleCloseMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hover:bg-blue-800 bg-blue-700 font-bold text-white px-5 py-2 rounded-xl"
              >
                Login
              </button>
              <div className="relative mr-4">
                <FaCartShopping
                  className="text-blue-700 w-8 h-6 cursor-pointer hover:text-blue-800"
                  onClick={handleDrawerToggle}  // <--- Bascule l'état du tiroir à chaque clic
                />
                <span className="absolute font-bold top-[-60%] right-[-40%] text-[12px] bg-yellow-500 rounded-full w-6 h-6 flex justify-center items-center text-white">
                  10
                </span>
              </div>
              <button
                type="button"
                className="text-[30px] cursor-pointer md:hidden"
                onClick={handleMenuToggle}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div
        ref={drawerRef}
        className={`overflow-y-auto fixed top-0 right-0 h-full w-full xl:w-[30%] bg-gray-100 shadow-lg z-40 transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="p-4  border-gray-200 flex justify-between items-center mt-16">
            <h1 className="text-2xl font-bold">Cart</h1>
            <IoMdClose

              className="text-blue-700 w-8 h-6 cursor-pointer hover:text-blue-800"
              onClick={handleDrawerToggle}  
            />
          
        </div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
