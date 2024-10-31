import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';



const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};





ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      ourPrice: PropTypes.number,
      marketPrice: PropTypes.number,
      rating: PropTypes.number,
      reviews: PropTypes.number,
      farmerName: PropTypes.string,
    })
  ).isRequired,
};

export default ProductGrid;