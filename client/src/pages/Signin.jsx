import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Signin() {
    const {login,email,setEmail,password,setPassword} = useContext(AuthContext);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" 
                onSubmit={(e)=>{
                    e.preventDefault();
                    login(email,password);
                }}>
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Sign In</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
