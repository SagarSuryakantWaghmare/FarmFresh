import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi'; // Icon for "Create Account"
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Icon for "View Products"
import backgroundImage from '../assets/backgroundImage.jpg'; // Adjust the path according to your structure

function FarmToTable() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-80vh"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use your local image
        filter: 'brightness(100%)' // Adjust brightness to 60%
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-left p-6 sm:p-8 lg:p-12">
        <div className="max-w-xl">
          {/* Headings */}
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
            Fresh from the farm,
          </h1>
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight mt-2">
            Delivered to your door
          </h2>
          
          {/* Paragraph */}
          <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl lg:text-2xl leading-relaxed">
            Experience the convenience of receiving fresh, locally grown produce straight from farmers.
            Farm2Table bridges the gap between farmers and consumers, bringing nature’s finest directly to your home.
            Enjoy the taste of quality, handpicked products while supporting sustainable farming.
          </p>

          {/* Buttons with Routing and Icons */}
          <div className="mt-10 flex space-x-4">
            <Link to="/signup" className="inline-block">
              <button
                type="button"
                className="px-6 py-3 text-base font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FiUserPlus className="inline-block w-5 h-5 mr-2" />
                Create Account
              </button>
            </Link>

            <Link to="/view-products" className="inline-block">
              <button
                type="button"
                className="px-6 py-3 text-base font-semibold rounded-lg text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <AiOutlineShoppingCart className="inline-block w-5 h-5 mr-2" />
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmToTable;
