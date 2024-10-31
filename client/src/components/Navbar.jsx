import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Import the shopping cart and user icons
import logo from '../assets/Farm.png'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2 shadow-md bg-white z-50">
      <div>
        <NavLink to="/">
          <img src={logo} alt="Farm2Kitchen Logo" className="h-20" />
        </NavLink>
      </div>

      {/* Hamburger icon for mobile view */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isMenuOpen ? (
            <span>&#10005;</span> // Cross icon
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Navigation links for mobile view */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex justify-end p-4 md:hidden">
          {/* Close button for mobile */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-3xl"
          >
            &#10005; {/* Cross icon */}
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4 p-4 mt-16 md:flex-row md:space-y-0 md:space-x-8 md:mt-0">
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu} // Close menu on link click
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggleMenu} // Close menu on link click
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={toggleMenu} // Close menu on link click
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
              }
            >
              Products
            </NavLink>
          </li>
          {/* Added Login, Signup, Cart, and Profile in mobile view */}
          <li className="md:hidden">
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="md:hidden">
            <NavLink
              to="/signup"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li className="md:hidden">
            <NavLink
              to="/cart"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2 flex items-center"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 flex items-center transition duration-300"
              }
            >
              <FaShoppingCart className="text-lg mr-2" /> {/* Cart icon */}
              Cart
            </NavLink>
          </li>
          {/* Profile link in mobile view */}
          <li className="md:hidden">
            <NavLink
              to="/profile"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2 flex items-center"
                  : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 flex items-center transition duration-300"
              }
            >
              <FaUserCircle className="text-lg mr-2" /> {/* Profile icon */}
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Login/Signup/Cart/Profile for desktop view */}
      <div className="hidden md:flex space-x-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
              : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2"
              : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 transition duration-300"
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2 flex items-center"
              : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 flex items-center transition duration-300"
          }
        >
          <FaShoppingCart className="text-lg mr-2" /> 
          Cart
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 text-white font-semibold rounded-lg px-4 py-2 flex items-center"
              : "text-gray-700 hover:bg-green-500 hover:text-white rounded-lg px-4 py-2 flex items-center transition duration-300"
          }
        >
          <FaUserCircle className="text-lg mr-2" /> {/* Profile icon */}
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
