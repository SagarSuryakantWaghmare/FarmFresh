import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/backgroundImage.jpg'; // Import your background image

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        
        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            setLoading(false);
            console.log(result);
            if (result.data === "Success") {
                console.log("Login Success");
                alert('Login successful!');
                navigate('/home');
            } else {
                alert('Incorrect password! Please try again.');
            }
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    return (
        <div 
            className="flex justify-center items-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${bg})` }} // Use template literal for background image
        >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="block text-lg font-semibold mb-2">
                            Email Id
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            id="exampleInputEmail1" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            aria-label="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="block text-lg font-semibold mb-2">
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            id="exampleInputPassword1" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            aria-label="Password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? <span className="loader"></span> : 'Login'}
                    </button>
                </form>

                <p className="my-4 text-center">Don&apos;t have an account?</p>
                <Link 
                    to='/Signup' 
                    className="w-full inline-block bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors text-center"
                >
                    Register
                </Link>
            </div>
            <style jsx>{`
                .loader {
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #3498db;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    animation: spin 2s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default Login;