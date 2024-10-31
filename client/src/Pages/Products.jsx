import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductCard from '../components/ProductCard'; 
import Spacer from '../components/Spacer'; 
import Apple from '../assets/Apple.jpg';
import Avocado from "../assets/Avocado.png";
import Banana from '../assets/Banana.jpg';
import Beetroot from '../assets/beetroot.png';
import Bringal from '../assets/bringal.png';
import Broccoli from '../assets/broccoli.png';
import Butter from '../assets/butter.png';
import Buttermilk from '../assets/buttermilk.png';
import Cabbage from '../assets/cabbage.png';
import Carrot from '../assets/Carrot.jpg';
import Cauliflower from '../assets/Cauliflower.png';
import Chard from '../assets/Chard.png';
import Cheese from '../assets/cheese.png';
import Cherry from '../assets/cherry.png';
import Corn from '../assets/corn.png';
import Cucumber from '../assets/cucumber.png';
import Dragonfruit from '../assets/dragonfruit.png';
import Egg from '../assets/egg.png';
import Fig from '../assets/fig.png';
import Garlic from '../assets/garlic.png';
import Grapefruit from '../assets/grapefruit.png';
import Grapes from '../assets/grapes.png';
import Jackfruit from '../assets/jackfruit.png';
import Kiwi from '../assets/kiwi.png';
import Lemon from '../assets/lemon.png';
import Lettuce from '../assets/lettuce.png';
import Mango from '../assets/mango.png';
import Milk from '../assets/milk.png';
import Onion from '../assets/onion.png';
import Orange from '../assets/orange.png';
import Papaya from '../assets/Papaya.png';
import Peach from '../assets/peach.png';
import Pineapple from '../assets/pineapple.png';
import Plum from '../assets/plum.png';
import Pomegranate from '../assets/Pomegranate.png';
import Potato from '../assets/potato.png';
import Radish from '../assets/radish.png';
import Spinach from '../assets/spinach.png';
import Tomato from '../assets/tamato.png';
import Watermelon from '../assets/watermelon.png';
import { FaSearch } from 'react-icons/fa';
import Cart from '../components/cart';
const allProducts = [
  { id: 1, name: 'Apple', image: Apple, ourPrice: 750, marketPrice: 900, rating: 4, reviews: 20, category: 'Fruits', farmerName: 'Rajesh Kumar' },
  { id: 2, name: 'Banana', image: Banana, ourPrice: 600, marketPrice: 750, rating: 5, reviews: 15, category: 'Fruits', farmerName: 'Sita Devi' },
  { id: 3, name: 'Carrot', image: Carrot, ourPrice: 300, marketPrice: 450, rating: 4, reviews: 10, category: 'Vegetables', farmerName: 'Ramesh Yadav' },
  { id: 4, name: 'Milk', image: Milk, ourPrice: 800, marketPrice: 950, rating: 3, reviews: 8, category: 'Dairy', farmerName: 'Anjali Singh' },
  { id: 5, name: 'Orange', image: Orange, ourPrice: 700, marketPrice: 850, rating: 4, reviews: 22, category: 'Fruits', farmerName: 'Vikram Patel' },
  { id: 6, name: 'Broccoli', image: Broccoli, ourPrice: 500, marketPrice: 650, rating: 4, reviews: 18, category: 'Vegetables', farmerName: 'Geeta Rani' },
  { id: 7, name: 'Cheese', image: Cheese, ourPrice: 1000, marketPrice: 1200, rating: 5, reviews: 25, category: 'Dairy', farmerName: 'Amit Sharma' },
  { id: 8, name: 'Potato', image: Potato, ourPrice: 250, marketPrice: 400, rating: 3, reviews: 5, category: 'Vegetables', farmerName: 'Karan Singh' },
  { id: 9, name: 'Avocado', image: Avocado, ourPrice: 900, marketPrice: 1100, rating: 4, reviews: 16, category: 'Fruits', farmerName: 'Manoj Verma' },
  { id: 10, name: 'Beetroot', image: Beetroot, ourPrice: 200, marketPrice: 350, rating: 3, reviews: 7, category: 'Vegetables', farmerName: 'Sunita Rao' },
  { id: 11, name: 'Brinjal', image: Bringal, ourPrice: 150, marketPrice: 250, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Suraj Malhotra' },
  { id: 12, name: 'Butter', image: Butter, ourPrice: 950, marketPrice: 1150, rating: 5, reviews: 20, category: 'Dairy', farmerName: 'Ritika Sharma' },
  { id: 13, name: 'Buttermilk', image: Buttermilk, ourPrice: 300, marketPrice: 450, rating: 4, reviews: 12, category: 'Dairy', farmerName: 'Suman Patel' },
  { id: 14, name: 'Cabbage', image: Cabbage, ourPrice: 100, marketPrice: 200, rating: 3, reviews: 4, category: 'Vegetables', farmerName: 'Jaswant Kaur' },
  { id: 15, name: 'Cauliflower', image: Cauliflower, ourPrice: 400, marketPrice: 550, rating: 4, reviews: 10, category: 'Vegetables', farmerName: 'Ajay Pandit' },
  { id: 16, name: 'Chard', image: Chard, ourPrice: 300, marketPrice: 450, rating: 3, reviews: 5, category: 'Vegetables', farmerName: 'Manjeet Singh' },
  { id: 17, name: 'Cherry', image: Cherry, ourPrice: 800, marketPrice: 950, rating: 4, reviews: 14, category: 'Fruits', farmerName: 'Ravi Patel' },
  { id: 18, name: 'Corn', image: Corn, ourPrice: 350, marketPrice: 500, rating: 4, reviews: 9, category: 'Vegetables', farmerName: 'Prakash Yadav' },
  { id: 19, name: 'Cucumber', image: Cucumber, ourPrice: 200, marketPrice: 300, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Rohini Shinde' },
  { id: 20, name: 'Dragonfruit', image: Dragonfruit, ourPrice: 1200, marketPrice: 1400, rating: 5, reviews: 22, category: 'Fruits', farmerName: 'Rajiv Gupta' },
  { id: 21, name: 'Egg', image: Egg, ourPrice: 400, marketPrice: 550, rating: 4, reviews: 18, category: 'Dairy', farmerName: 'Rakesh Singh' },
  { id: 22, name: 'Fig', image: Fig, ourPrice: 950, marketPrice: 1100, rating: 5, reviews: 19, category: 'Fruits', farmerName: 'Neha Agarwal' },
  { id: 23, name: 'Garlic', image: Garlic, ourPrice: 300, marketPrice: 450, rating: 4, reviews: 10, category: 'Vegetables', farmerName: 'Prem Lata' },
  { id: 24, name: 'Grapefruit', image: Grapefruit, ourPrice: 800, marketPrice: 950, rating: 5, reviews: 15, category: 'Fruits', farmerName: 'Suresh Verma' },
  { id: 25, name: 'Grapes', image: Grapes, ourPrice: 600, marketPrice: 750, rating: 4, reviews: 11, category: 'Fruits', farmerName: 'Arjun Singh' },
  { id: 26, name: 'Jackfruit', image: Jackfruit, ourPrice: 750, marketPrice: 900, rating: 4, reviews: 14, category: 'Fruits', farmerName: 'Ravi Shankar' },
  { id: 27, name: 'Kiwi', image: Kiwi, ourPrice: 900, marketPrice: 1100, rating: 5, reviews: 20, category: 'Fruits', farmerName: 'Jasmeet Kaur' },
  { id: 28, name: 'Lemon', image: Lemon, ourPrice: 200, marketPrice: 350, rating: 4, reviews: 8, category: 'Vegetables', farmerName: 'Ravi Gupta' },
  { id: 29, name: 'Lettuce', image: Lettuce, ourPrice: 300, marketPrice: 450, rating: 3, reviews: 5, category: 'Vegetables', farmerName: 'Geeta Patel' },
  { id: 30, name: 'Mango', image: Mango, ourPrice: 1200, marketPrice: 1400, rating: 5, reviews: 25, category: 'Fruits', farmerName: 'Manoj Kumar' },
  { id: 31, name: 'Onion', image: Onion, ourPrice: 100, marketPrice: 200, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Kamal Yadav' },
  { id: 32, name: 'Papaya', image: Papaya, ourPrice: 500, marketPrice: 650, rating: 4, reviews: 15, category: 'Fruits', farmerName: 'Anita Desai' },
  { id: 33, name: 'Peach', image: Peach, ourPrice: 850, marketPrice: 1000, rating: 5, reviews: 18, category: 'Fruits', farmerName: 'Sanjeev Kapoor' },
  { id: 34, name: 'Pineapple', image: Pineapple, ourPrice: 700, marketPrice: 850, rating: 4, reviews: 12, category: 'Fruits', farmerName: 'Naveen Gupta' },
  { id: 35, name: 'Plum', image: Plum, ourPrice: 600, marketPrice: 750, rating: 4, reviews: 10, category: 'Fruits', farmerName: 'Sangeeta Yadav' },
  { id: 36, name: 'Pomegranate', image: Pomegranate, ourPrice: 850, marketPrice: 1000, rating: 5, reviews: 20, category: 'Fruits', farmerName: 'Rajesh Patel' },
  { id: 37, name: 'Radish', image: Radish, ourPrice: 200, marketPrice: 300, rating: 3, reviews: 6, category: 'Vegetables', farmerName: 'Sita Ram' },
  { id: 38, name: 'Spinach', image: Spinach, ourPrice: 150, marketPrice: 250, rating: 3, reviews: 4, category: 'Vegetables', farmerName: 'Rakesh Kumar' },
  { id: 39, name: 'Tomato', image: Tomato, ourPrice: 250, marketPrice: 400, rating: 4, reviews: 7, category: 'Vegetables', farmerName: 'Radha Sharma' },
  { id: 40, name: 'Watermelon', image: Watermelon, ourPrice: 500, marketPrice: 650, rating: 4, reviews: 14, category: 'Fruits', farmerName: 'Vikram Singh' },
];

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleProceedToPayment = () => {
    alert('Proceeding to payment...');
    // You can integrate your payment logic here.
  };

  return (
    <div className="container mx-auto p-4">
      <Spacer />
      <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md bg-white">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow outline-none text-gray-700"
        />
      </div>
      <Spacer />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
        </div>
        <div>
          <Cart
            cartItems={cartItems}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onDeleteItem={handleDeleteItem}
            onProceedToPayment={handleProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;