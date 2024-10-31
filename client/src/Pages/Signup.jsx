import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import bg from '../assets/backgroundImage.jpg'; 

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user'); 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            } else {
                alert("Registered successfully! Please Login to proceed.");
                navigate('/login');
            }
        })
        .catch(err => console.log(err));
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
        if (type === 'farmer') {
            navigate('/farmer-register'); 
        }
    };

    return (
        <div 
            className="flex justify-center items-center text-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${bg})` }} // Set the background image
        >
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
                <h2 className="mb-6 text-2xl font-bold">Register</h2>
                
                {/* User Type Selection as Buttons */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Register as:</label>
                    <div className="flex justify-center">
                        <button 
                            className={`mx-2 py-2 px-4 rounded-lg ${userType === 'user' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} hover:bg-green-600 transition-colors`} 
                            onClick={() => handleUserTypeChange('user')}
                        >
                            User
                        </button>
                        <button 
                            className={`mx-2 py-2 px-4 rounded-lg ${userType === 'farmer' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'} hover:bg-green-600 transition-colors`} 
                            onClick={() => handleUserTypeChange('farmer')}
                        >
                            Farmer
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputName" className="block text-lg font-semibold mb-2">
                            Name
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-green-200"
                            id="exampleInputName" 
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputEmail" className="block text-lg font-semibold mb-2">
                            Email Id
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-green-200"
                            id="exampleInputEmail" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputPassword" className="block text-lg font-semibold mb-2">
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            id="exampleInputPassword" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Register
                    </button>
                </form>

                <p className="my-4">Already have an account?</p>
                <Link to='/login' className="w-full inline-block bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default SignUp;
