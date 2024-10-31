// src/components/Cart.js
import React, { useState } from 'react';
import Spacer from '../components/Spacer';

const Cart = () => {
    // Example cart items, replace this with your actual cart state from global or local storage
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Carrot', price: 20, quantity: 2 },
        { id: 2, name: 'Tomato', price: 15, quantity: 3 },
        { id: 3, name: 'Broccoli', price: 30, quantity: 1 },
    ]);

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Handle quantity change
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    // Remove item from cart
    const handleRemove = (id) => {
        const filteredItems = cartItems.filter(item => item.id !== id);
        setCartItems(filteredItems);
    };

    return (
        <>
        <Spacer/>
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items mb-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b py-4">
                                <div>
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p>Price: ₹{item.price}</p>
                                    <div className="flex items-center">
                                        <label htmlFor={`quantity-${item.id}`} className="mr-2">Qty:</label>
                                        <input
                                            type="number"
                                            id={`quantity-${item.id}`}
                                            className="w-16 border px-2 py-1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            min="1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>Total: ₹{item.price * item.quantity}</p>
                                    <button 
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="total-price text-right">
                        <h2 className="text-2xl font-bold">Total Price: ₹{totalPrice}</h2>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
        </>
    );
};

export default Cart;
