import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import your images
import Veg1 from "../assets/Veg1.jpg";
import Veg2 from "../assets/Veg2.jpg"; 
import Veg3 from "../assets/Veg3.jpg";
import Veg4 from "../assets/Veg4.jpg";

// Import Slick slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to handle button click and navigate to the products page
  const handleDiscoverClick = () => {
    navigate("/products"); // Change this path to match your products route
  };

  return (
    <div className="relative max-w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src={Veg1}
            alt="Citrus Tree 1"
            className="w-screen h-[75vh] object-cover brightness-30" // Increase height to 75vh
          />
        </div>
        <div>
          <img
            src={Veg2}
            alt="Citrus Tree 2"
            className="w-screen h-[75vh] object-cover brightness-30"
          />
        </div>
        <div>
          <img
            src={Veg3}
            alt="Citrus Tree 3"
            className="w-screen h-[75vh] object-cover brightness-30"
          />
        </div>
        <div>
          <img
            src={Veg4}
            alt="Citrus Tree 4"
            className="w-screen h-[75vh] object-cover brightness-30"
          />
        </div>
      </Slider>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-6xl font-bold mb-6">
          Bridging Farms to Your Plate with Freshness and Care
        </h1>
        <button 
          onClick={handleDiscoverClick} // Add click handler here
          className="bg-green-500 text-white py-3 px-6 rounded shadow-lg hover:bg-green-600 transition"
        >
          Discover the Taste of Pure
        </button>
        <div className="flex justify-center space-x-8 mt-6">
          <div className="flex flex-col items-center">
            {/* Increase icon size to 2x */}
            <i className="fas fa-tractor fa-2x text-white"></i>
            {/* Smaller text size for the description */}
            <span className="text-white font-bold mt-2 text-lg">
              Choose your farmer
            </span>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-seedling fa-2x text-white"></i>
            <span className="text-white font-bold mt-2 text-lg">
              Organically grown
            </span>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-truck fa-2x text-white"></i>
            <span className="text-white font-bold mt-2 text-lg">
              Delivered to your doorstep
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
