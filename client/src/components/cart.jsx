import React from 'react';

const Cart = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem, onProceedToPayment }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.ourPrice * item.quantity, 0);

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md fixed right-0 top-40 h-full w-1/4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <span>{item.name}</span> <br />
                  <span className="text-sm text-gray-500">₹{item.ourPrice}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => onDecreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => onIncreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-semibold">Total: ₹{totalPrice}</p>
            <button
              onClick={onProceedToPayment}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
