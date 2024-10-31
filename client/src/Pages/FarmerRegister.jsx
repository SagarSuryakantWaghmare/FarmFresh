import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import bg from '../assets/backgroundImage.jpg'; // Import the background image
import Spacer from '../components/Spacer';
const FarmerRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [document, setDocument] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('document', document);

        axios.post('http://localhost:3001/farmer-register', formData)
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

    return (
        <>
        <Spacer/>

        <div 
            className="flex  justify-center items-center text-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${bg})` }} // Set the background image
        >
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl my-10">
                <h2 className="mb-6 text-2xl font-bold">Farmer Registration</h2>
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
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputAddress" className="block text-lg font-semibold mb-2">
                            Address
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Address"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-green-200"
                            id="exampleInputAddress" 
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputPhone" className="block text-lg font-semibold mb-2">
                            Phone Number
                        </label>
                        <input 
                            type="tel"
                            placeholder="Enter Phone Number"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-green-200"
                            id="exampleInputPhone" 
                            onChange={(event) => setPhone(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label htmlFor="exampleInputDocument" className="block text-lg font-semibold mb-2">
                            Upload Document
                        </label>
                        <input 
                            type="file"
                            className="w-full border rounded-lg focus:outline-none focus:ring-2 focus:bg-green-200"
                            id="exampleInputDocument" 
                            onChange={(event) => setDocument(event.target.files[0])}
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
        </>
    );
}

export default FarmerRegister;
