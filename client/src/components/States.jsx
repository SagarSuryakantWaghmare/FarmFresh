// Stats.js
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

// Sample data for the stats
const statsData = [
    {
        number: 554280,
        description: "adopted trees to connect consumers with the fields and avoid food waste",
        icon: <i className="fas fa-tree text-teal-600 text-4xl mb-2"></i>
    },
    {
        number: 4754937,
        description: "boxes of fresh food sent straight from the farmers, to reduce the carbon footprint",
        icon: <i className="fas fa-box text-teal-600 text-4xl mb-2"></i>
    },
    {
        number: 315,
        description: "farmers in 8 countries selling their products directly to consumers",
        icon: <i className="fas fa-user text-teal-600 text-4xl mb-2"></i>
    },
    {
        number: 84,
        description: "projects in transition to organic to create a more sustainable agriculture",
        icon: <i className="fas fa-leaf text-teal-600 text-4xl mb-2"></i>
    },
];

function Stats() {
    const [hasStartedCounting, setHasStartedCounting] = useState(false);
    const statsRef = useRef(null);
    const handleScroll = () => {
        if (statsRef.current) {
            const { top, bottom } = statsRef.current.getBoundingClientRect();
            const isVisible = top < window.innerHeight && bottom >= 0; // Check if the element is in view
            if (isVisible && !hasStartedCounting) {
                setHasStartedCounting(true); // Start counting
                window.removeEventListener('scroll', handleScroll); // Remove event listener after counting starts
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
        };
    }, [hasStartedCounting]);

    return (
        <div ref={statsRef} className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">Our Growing Revolution</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                {statsData.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                        {stat.icon}
                        <span className="text-4xl font-bold text-green-500"> {/* Changed to green-500 */}
                            {hasStartedCounting && (
                                <CountUp start={0} end={stat.number} duration={2} separator="," />
                            )}
                        </span>
                        <p className="text-gray-700">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;
