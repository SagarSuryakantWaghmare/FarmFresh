import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Farmer: {product.farmerName}</p>
      <div className="flex justify-between mt-2">
        <span className="text-green-600">₹{product.ourPrice}</span>
        <span className="text-red-500 line-through">₹{product.marketPrice}</span>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
        <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
      </div>
      
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
