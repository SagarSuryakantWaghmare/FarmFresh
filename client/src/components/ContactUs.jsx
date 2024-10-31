import React from 'react';
import farmImage from '../assets/backgroundImage.jpg';

function ContactUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={farmImage}
            alt="Farm"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Contact Form Section */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have any questions, suggestions, or need help? Feel free to reach out using the form below, and we’ll get back to you as soon as we can.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Your Message:
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Type your message here"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
