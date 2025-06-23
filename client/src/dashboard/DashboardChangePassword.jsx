import AuthContext from "../context/AuthContext";
import {useState} from 'react';
export default function DashboardChangePassword() {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
return (
    <>
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-center mb-6 ">Change Password</h2>

            <form 
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" 
                onSubmit={(e)=>{
                    e.preventDefault();
                    changePassword(email,oldPassword,newPassword);
                }}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
                <input
                    onChange={(e) => setOldPassword(e.target.value)}
                    type="password"
                    name="oldPassword"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    name="newPassword"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <button
                className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
                Change Password
            </button> 
            </form>
        </div>

    </>
)
}
