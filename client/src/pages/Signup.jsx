import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

export default function Signup() {
    const {username,email,password,gender,signup,setUsername,setPassword,setEmail,setGender} = useContext(AuthContext)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form 
                onSubmit={(e)=> {
                    e.preventDefault();
                    signup(username,email,password,gender);
                }}
            >
                <div className="min-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            onChange={(e)=>setUsername(e.target.value)}
                            type="text" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>

                    <div>
                        <span className="block text-sm font-medium text-gray-700">Gender</span>
                        <div className="mt-2 flex items-center space-x-4">
                            <label 
                            onChange={(e)=>setGender(e.target.value)}
                            className="inline-flex items-center">
                                <input type="radio" name="gender" value="male" className="form-radio text-blue-600" />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input 
                                onChange={(e)=>setGender(e.target.value)}
                                type="radio" name="gender" value="female" className="form-radio text-blue-600" />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Signup
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}