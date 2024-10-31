import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'; 
import About from './Pages/About'; 
import Products from './Pages/Products'; 
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import FarmerRegister from './Pages/FarmerRegister'; // Import the Farmer Register component
import Footer from './components/Footer'; 
import Spacer from './components/Spacer'; 
import Cart from './Pages/Cart';

function App() {
    return (
        <Router>
            <Navbar />
            <Spacer /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/farmer-register" element={<FarmerRegister />} /> {/* Add the route for farmer registration */}
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;
