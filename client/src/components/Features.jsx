import DirectFarmerAccessImage from '../assets/DirectFarmerAccess.jpg';
import SeasonalProduceSelectionImage from '../assets/SeasonalProduceSelection.jpeg';
import AffordableHealthyChoicesImage from '../assets/AffordableHealthyChoices.jpeg';

const featuresData = [
    {
        title: "Direct Farmer Access",
        description: "Connect with local farmers and access fresh produce directly from the source. Enjoy the benefits of supporting local agriculture and knowing where your food comes from.",
        image: DirectFarmerAccessImage
    },
    {
        title: "Seasonal Produce Selection",
        description: "Enjoy a variety of seasonal fruits and vegetables picked at their peak freshness. Experience the vibrant flavors and nutrition that come from eating in harmony with the seasons.",
        image: SeasonalProduceSelectionImage
    },
    {
        title: "Affordable Healthy Choices",
        description: "Access a wide range of affordable, high-quality organic produce. Make healthy eating easier and more accessible for everyone without breaking the bank.",
        image: AffordableHealthyChoicesImage
    }
];

function Features() {
    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Features</h2> {/* Updated heading styling */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6"> {/* Adjusted gap and padding */}
                {featuresData.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full transform transition-all duration-300 hover:scale-105 hover:bg-green-50" 
                    > {/* Added hover effects */}
                        <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-center text-green-600 mb-2">{feature.title}</h3> {/* Adjusted title size */}
                        <p className="text-gray-700 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
