import React, { useState, useEffect } from 'react';

const steps = [
    {
        title: "Getting Started is Easy!",
        description: "Create your profile and embark on a journey to discover the freshest produce."
    },
    {
        title: "Step 01",
        subtitle: "Browse and Select Your Products",
        description: "Explore our diverse range of fresh produce and handpick the items you'd love to purchase."
    },
    {
        title: "Step 02",
        subtitle: "Review Your Selections",
        description: "Take a moment to review your cart and make any necessary adjustments."
    },
    {
        title: "Step 03",
        subtitle: "Savor the Freshness!",
        description: "Your order will arrive at your doorstep, fresh and ready for you to enjoy."
    }
];

function Slider() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState('right');
    const [arrowColor, setArrowColor] = useState('text-gray-700'); // Default color for arrows

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide(); // Automatically go to the next slide
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle next slide (Right arrow)
    const nextSlide = () => {
        setDirection('right');
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
        setArrowColor('text-green-500'); // Change arrow color to green on click
        setTimeout(() => setArrowColor('text-gray-700'), 200); // Reset color after 200ms
    };

    // Handle previous slide (Left arrow)
    const prevSlide = () => {
        setDirection('left');
        setCurrentStep((prevStep) => (prevStep === 0 ? steps.length - 1 : prevStep - 1));
        setArrowColor('text-green-500'); // Change arrow color to green on click
        setTimeout(() => setArrowColor('text-gray-700'), 200); // Reset color after 200ms
    };

    return (
        <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden h-[20vh] m-1 p-0">
            {/* Content */}
            <div className="relative w-full h-full bg-gray-100">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl ${arrowColor} hover:text-green-500 focus:outline-none`}
                >
                    &#10094;
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl ${arrowColor} hover:text-green-500 focus:outline-none`}
                >
                    &#10095;
                </button>

                {/* Slider content */}
                <div className="relative w-full h-full flex justify-center items-center">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`absolute transition-all duration-1000 ease-in-out transform ${
                                index === currentStep
                                    ? 'opacity-100 translate-x-0'
                                    : direction === 'right'
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                            }`}
                            style={{ width: '100%', display: index === currentStep ? 'block' : 'none' }}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 shadow-lg rounded-lg">
                                <h1 className="text-xl md:text-2xl font-bold text-green-600 mb-4">{step.title}</h1>
                                {step.subtitle && <h2 className="text-lg md:text-xl font-semibold mb-2 text-green-500">{step.subtitle}</h2>}
                                <p className="text-sm md:text-md text-gray-700 text-center">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
