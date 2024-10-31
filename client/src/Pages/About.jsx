import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaSeedling, FaUsers, FaHandsHelping } from "react-icons/fa"; // Icons for mission, founders, and impact
import FarmToTable from "../components/FarmToTable";
import Shraddha from "../assets/Shraddha.jpg";
// import Sagar from "../assets/Sagar.jpg";
import Kalyani from "../assets/Kalyani.jpg";
import { useNavigate } from "react-router-dom";
import Spacer from "../components/Spacer";

const About = () => {
  const navigate = useNavigate(); // Moved inside the component

  const handleGetInvolvedClick = () => {
    navigate("/Signup"); // This will now route to /Signup when the button is clicked
  };

  // Sample images for founders (update with actual image paths)
  const founderImages = [
    { name: "Shraddha Shingare", img: Shraddha, role: "CEO" },
    // { name: "Sagar Waghmare", img: Sagar, role: "CTO" },
    { name: "Kalyani Patil", img: Kalyani, role: "COO" },
  ];

  // Refs to observe the divs
  const missionRef = useRef(null);
  const foundersRef = useRef(null);
  const impactRef = useRef(null);
  const joinUsRef = useRef(null);

  // Use useInView to check if elements are in view
  const isMissionInView = useInView(missionRef, { once: false });
  const isFoundersInView = useInView(foundersRef, { once: false });
  const isImpactInView = useInView(impactRef, { once: false });
  const isJoinUsInView = useInView(joinUsRef, { once: false });

  return (
    <>
    <Spacer/>
      <FarmToTable />
      <div className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-green-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isMissionInView ? 1 : 0,
              y: isMissionInView ? 0 : -20,
            }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>

          {/* Mission Section */}
          <motion.div
            ref={missionRef}
            className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMissionInView ? 1 : 0,
              y: isMissionInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              <FaSeedling className="inline-block mr-2 text-green-700" />
              Our Mission
            </h3>
            <p>
              At <strong>Farm2Kitchen</strong>, we believe in revolutionizing
              the way food reaches your table. We are a platform created by
              farmers, for farmers. Our journey began in the fields—growing
              oranges and learning the ins and outs of sustainable farming.
            </p>
            <p>
              In 2024, we came together to launch Farm2Kitchen, empowering
              farmers to reach their customers directly, eliminating unnecessary
              intermediaries in the food supply chain.
            </p>
          </motion.div>

          {/* Heading to the founder */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-500 mb-4">
              The Minds Behind Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Meet our dedicated team of co-founders who are passionate about
              making a difference.
            </p>
          </div>

          {/* Founders Section */}
          <motion.div
            ref={foundersRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isFoundersInView ? 1 : 0,
              y: isFoundersInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            {founderImages.map((founder, index) => (
              <div
                key={index}
                className="bg-white p-12 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-110 hover:bg-green-50 hover:shadow-2xl" // Added hover effects
              >
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-64 h-64 rounded-full mx-auto mb-8 object-cover transition duration-300 hover:opacity-90" // Added slight opacity change on hover
                />
                <h4 className="text-2xl font-semibold text-green-500 transition-colors duration-300 hover:text-green-600">
                  {founder.name}
                </h4>
                <p className="text-lg text-gray-600 transition-colors duration-300 hover:text-gray-700">
                  Co-Founder
                </p>
              </div>
            ))}
          </motion.div>

          {/* Impact Section */}
          <motion.div
            ref={impactRef}
            className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isImpactInView ? 1 : 0,
              y: isImpactInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              <FaHandsHelping className="inline-block mr-2 text-green-700" />
              The Impact of Direct Sales
            </h3>
            <p>
              When you purchase directly from farmers, you empower them to
              influence their sale prices, ensuring better income and job
              security in rural areas. Our model fosters a win-win-win scenario:
              it's beneficial for the farmers, advantageous for society, and
              good for the environment.
            </p>
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            ref={joinUsRef}
            className="bg-gray-100 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isJoinUsInView ? 1 : 0,
              y: isJoinUsInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              <FaUsers className="inline-block mr-2 text-green-700" />
              Join Us
            </h3>
            <p>
              At Farm2Kitchen, we are committed to transparency and
              sustainability in food production. Join us in making a difference
              by supporting local farmers and reducing food waste. Our platform
              is designed to connect consumers directly with farmers, ensuring
              fresh produce delivered straight to your table.
            </p>
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
              onClick={handleGetInvolvedClick} 
            >
              Get Involved
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
