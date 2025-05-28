import React from 'react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500 mb-6"><span className='text-gray-700'><i class="fa-solid fa-globe"></i></span> 404 Page Not Found</h1>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Go to Home
            </button>
        </div>
    );
}