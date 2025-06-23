import React, { useState } from 'react'
import userService from '../services/UserService';

export default function DashboardChangeEmail() {
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const [newEmail,setNewEmail] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        userService.changeEmail(email, password, newEmail);
                        window.location.reload();
                    }}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Change Email</h2>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="current-email">Enter your email</label>
                    <input
                        type="email"
                        id="current-email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Current email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="new-email">New Email</label>
                    <input
                        type="email"
                        id="new-email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setNewEmail(e.target.value)}
                        value={newEmail}
                        placeholder="New email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                    Confirm
                </button>
            </form>
        </div>
    )
}
